import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { UserContext } from "../../providers/Authprovider"

export const UserDashboard = () => {

    const [cancelingAppointmentId, setCancelingAppointmentId] = useState<number | null>(null)
    const [isCanceling, setIsCanceling] = useState(false)

    const upcomingAppointments = [
        {
            id: 1,
            barber: "James Wilson",
            service: "Haircut & Style",
            date: "May 15, 2024",
            time: "10:30 AM",
            location: "Main Street Location",
            image: "/placeholder.svg?height=100&width=100",
        },
        {
            id: 2,
            barber: "Michael Rodriguez",
            service: "Beard Trim",
            date: "May 22, 2024",
            time: "2:00 PM",
            location: "Downtown Location",
            image: "/placeholder.svg?height=100&width=100",
        },
    ]

    const pastAppointments = [
        {
            id: 3,
            barber: "David Thompson",
            service: "Haircut & Beard Trim",
            date: "April 30, 2024",
            time: "11:00 AM",
            location: "Westside Location",
            image: "/placeholder.svg?height=100&width=100",
        },
        {
            id: 4,
            barber: "William Davis",
            service: "Haircut",
            date: "April 15, 2024",
            time: "9:30 AM",
            location: "Downtown Location",
            image: "/placeholder.svg?height=100&width=100",
        },
        {
            id: 5,
            barber: "Robert Johnson",
            service: "Fade & Design",
            date: "March 28, 2024",
            time: "3:30 PM",
            location: "Main Street Location",
            image: "/placeholder.svg?height=100&width=100",
        },
    ]
    const handleCancelAppointment = () => {
        if (!cancelingAppointmentId) return

        setIsCanceling(true)

        // Simulate cancellation process
        setTimeout(() => {
            setIsCanceling(false)
            setCancelingAppointmentId(null)
            // In a real app, you would update the appointments list here
        }, 1500)
    }

    // -----------------------------------------
    const {user} = useContext(UserContext)

    return (
        <div className="flex min-h-screen flex-col m-auto">
            <Header />

            <main className="flex-1 py-10 m-auto">
                <div className="container">
                    <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">Agenda</h1>
                            <p className="text-muted-foreground">Controle seus agendamentos</p>
                        </div>
                        <Link to="/schedule">
                            <button className="mt-4 sm:mt-0 btn">Gerenciar horários</button>
                        </Link>
                    </div>

                    <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                        <div className="space-y-8">
                            <div>
                                <div>
                                    <h1>Perfil</h1>
                                    <p>Informações pessoais</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-full bg-muted p-2">
                                            {/* <User className="h-6 w-6" /> */}

                                        </div>
                                        <div>
                                            <p className="font-medium">{user?.name}</p>
                                            <p className="text-sm text-muted-foreground">{user?.email}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm">Informações </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm">Endereço da Barbearia:</span>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button className="w-full btn">
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                            

                        <div>
                            <div>
                                <div>
                                    <h1>Meus Horários</h1>
                                </div>

                                <div>
                                    <div >
                                        <div className="grid w-full grid-cols-2">
                                            <p>Próximos</p>
                                            <p>Passados</p>
                                        </div>

                                        <div className="mt-6">
                                            {upcomingAppointments.length > 0 ? (
                                                <div className="space-y-4">
                                                    {upcomingAppointments.map((appointment) => (
                                                        <div key={appointment.id} className="rounded-lg border p-4">
                                                            <div className="flex items-start gap-4">
                                                                <img
                                                                    src={appointment.image || "/placeholder.svg"}
                                                                    alt={appointment.barber}
                                                                    className="h-16 w-16 rounded-full object-cover"
                                                                />
                                                                <div className="flex-1">
                                                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                                                        <h3 className="font-medium">{appointment.barber}</h3>
                                                                        <p className="text-sm font-medium text-primary">{appointment.service}</p>
                                                                    </div>
                                                                    <div className="mt-2 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                                                                        <div className="flex items-center gap-1">
                                                                            {/* <CalendarDays className="h-4 w-4 text-muted-foreground" /> */}
                                                                            <span>{appointment.date}</span>
                                                                        </div>
                                                                        <div className="flex items-center gap-1">
                                                                            {/* <Clock className="h-4 w-4 text-muted-foreground" /> */}
                                                                            <span>{appointment.time}</span>
                                                                        </div>
                                                                        <div className="flex items-center gap-1 sm:col-span-2">
                                                                            {/* <MapPin className="h-4 w-4 text-muted-foreground" /> */}
                                                                            <span>{appointment.location}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                                                                        <button className="sm:flex-1">
                                                                            Reschedule
                                                                        </button>
                                                                        <div>
                                                                            <div >
                                                                                <button
                                                                                    className="text-destructive hover:text-destructive sm:flex-1"
                                                                                    onClick={() => setCancelingAppointmentId(appointment.id)}
                                                                                >
                                                                                    Cancel
                                                                                </button>
                                                                            </div>

                                                                            <div>
                                                                                <div>
                                                                                    <h1>Cancel Appointment</h1>
                                                                                    <p>
                                                                                        Are you sure you want to cancel your appointment with {appointment.barber}{" "}
                                                                                        on {appointment.date} at {appointment.time}?
                                                                                    </p>
                                                                                </div>
                                                                                <div>
                                                                                    <button onClick={() => setCancelingAppointmentId(null)}>
                                                                                        Keep Appointment
                                                                                    </button>
                                                                                    <button
                                                                                        onClick={handleCancelAppointment}
                                                                                        disabled={isCanceling}
                                                                                    >
                                                                                        {isCanceling ? "Canceling..." : "Yes, Cancel"}
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="py-8 text-center">
                                                    <p className="text-muted-foreground">You have no upcoming appointments.</p>
                                                    <Link to="/barbers">
                                                        <button className="mt-4">Book an Appointment</button>
                                                    </Link>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-6">
                                            {pastAppointments.length > 0 ? (
                                                <div className="space-y-4">
                                                    {pastAppointments.map((appointment) => (
                                                        <div key={appointment.id} className="rounded-lg border p-4">
                                                            <div className="flex items-start gap-4">
                                                                <img
                                                                    src={appointment.image || "/placeholder.svg"}
                                                                    alt={appointment.barber}
                                                                    className="h-16 w-16 rounded-full object-cover"
                                                                />
                                                                <div className="flex-1">
                                                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                                                        <h3 className="font-medium">{appointment.barber}</h3>
                                                                        <p className="text-sm font-medium text-primary">{appointment.service}</p>
                                                                    </div>
                                                                    <div className="mt-2 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                                                                        <div className="flex items-center gap-1">
                                                                            {/* <CalendarDays className="h-4 w-4 text-muted-foreground" /> */}
                                                                            <span>{appointment.date}</span>
                                                                        </div>
                                                                        <div className="flex items-center gap-1">
                                                                            {/* <Clock className="h-4 w-4 text-muted-foreground" /> */}
                                                                            <span>{appointment.time}</span>
                                                                        </div>
                                                                        <div className="flex items-center gap-1 sm:col-span-2">
                                                                            {/* <MapPin className="h-4 w-4 text-muted-foreground" /> */}
                                                                            <span>{appointment.location}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-4 flex gap-2">
                                                                        <button className="flex-1 btn">
                                                                            Book Similar
                                                                        </button>
                                                                        <button className="flex-1 btn">
                                                                            Leave Review
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="py-8 text-center">
                                                    <p className="text-muted-foreground">You have no past appointments.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

        </div>
    )
}