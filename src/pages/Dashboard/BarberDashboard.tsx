import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { UserContext } from "../../providers/Authprovider"
import { ScheduleModal } from "../../components/modal/scheduleModal"

export const BarberDashboard = () => {

    const [cancelingAppointmentId, setCancelingAppointmentId] = useState<number | null>(null)
    const [isCanceling, setIsCanceling] = useState(false)

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
    const { user, setModal } = useContext(UserContext)
    const openModal = () => {
        setModal(true)
    }

    const getDay = (appointment: string) => {
        const year = new Date(appointment).getFullYear()
        const month = new Date(appointment).getMonth().toLocaleString("pt-BR", { minimumIntegerDigits: 2 })
        const day = new Date(appointment).getDay().toLocaleString("pt-BR", { minimumIntegerDigits: 2 })

        const fullDate = `${day}/${month}/${year}`
        return fullDate
    }

    const getTime = (appointment: string) => {
        const hours = new Date(appointment).getHours().toLocaleString("pt-BR", { minimumIntegerDigits: 2 })
        const minutes = new Date(appointment).getMinutes().toLocaleString("pt-BR", { minimumIntegerDigits: 2 })
        const fullTime = `${hours}:${minutes}`
        return fullTime
    }

    return (
        <>

            <ScheduleModal />
            <div className="flex min-h-screen flex-col m-auto">

                <Header />

                <main className="flex-1 py-10 m-auto">
                    <div className="container">

                        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h1 className="text-4xl font-bold">Agenda</h1>
                                <p className="text-muted-foreground">Controle seus agendamentos</p>
                            </div>

                            <button className="mt-4 sm:mt-0 btn" onClick={openModal}>Gerenciar horários</button>

                        </div>

                        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                            <div className="space-y-8">
                                <div>
                                    <div>
                                        <h1>Informações pessoais</h1>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-4">
                                            <div className="rounded-full bg-muted p-2">
                                                {/* <User className="h-6 w-6" /> */}
                                                {/* IMAGEM */}
                                            </div>
                                            <div>
                                                <p className="font-medium">{user?.name}</p>
                                                <p className="text-sm text-muted-foreground">{user?.email}</p>
                                                <p className="text-sm text-muted-foreground">{user?.phone}</p>
                                                <p className="text-sm text-muted-foreground">{user?.phone}Endereço</p>
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
                                        <h1 className="text-4xl font-bold">Meus Horários</h1>
                                    </div>

                                    <div>
                                        <div >


                                            <div className="mt-6">
                                                {user!.schedule.length > 0 ? (
                                                    <div className="space-y-4 flex flex-wrap gap-4">
                                                        {user!.schedule.map((appointment) => (
                                                            <div key={Number(appointment.id)} className="rounded-lg border p-4">
                                                                <div className="flex items-start gap-4">
                                                                    <div className="flex-1">
                                                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                                                            <h3 className="font-medium">{appointment.clientName}</h3>
                                                                        </div>
                                                                        <div className="mt-2 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                                                                            <div className="flex items-center gap-1">
                                                                                {/* <CalendarDays className="h-4 w-4 text-muted-foreground" /> */}
                                                                                {appointment.date ? <p>{getDay(appointment.date)}</p> : null}
                                                                            </div>

                                                                            <div className="flex items-center gap-1">
                                                                                <div>
                                                                                    {/* <Clock className="h-4 w-4 text-muted-foreground" /> */}
                                                                                    {appointment.startTime ? <p>{getTime(appointment.startTime)}</p> : null}
                                                                                </div>
                                                                                <div className="flex items-center gap-1">
                                                                                    {/* <Clock className="h-4 w-4 text-muted-foreground" /> */}
                                                                                    {appointment.endTime ? <p>{getTime(appointment.endTime)}</p> : null}
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex items-center gap-1 sm:col-span-2">
                                                                                {/* <MapPin className="h-4 w-4 text-muted-foreground" /> */}
                                                                                <span>{appointment.isAvailable}Agenda aberta</span>
                                                                            </div>
                                                                            {/* <div className="flex items-center gap-1 sm:col-span-2">
                                                                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                                                                <span>{appointment.location}</span>
                                                                            </div> */}
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

                                            {/* <div className="mt-6">
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
                                                                                <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                                                                <span>{appointment.date}</span>
                                                                            </div>
                                                                            <div className="flex items-center gap-1">
                                                                                <Clock className="h-4 w-4 text-muted-foreground" />
                                                                                <span>{appointment.time}</span>
                                                                            </div>
                                                                            <div className="flex items-center gap-1 sm:col-span-2">
                                                                                <MapPin className="h-4 w-4 text-muted-foreground" />
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
                                            </div> */}

                                            <div className="flex w-full justify-between">
                                                <p>Próximos</p>
                                                <p>Passados</p>
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
        </>
    )
}