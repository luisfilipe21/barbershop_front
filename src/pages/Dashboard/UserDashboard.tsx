import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../providers/Authprovider"
import { ToastContainer } from "react-toastify"
import { api } from "../../service/api"

export const UserDashboard = () => {

    const { user } = useContext(UserContext)

    useEffect(() => {
        try {
            const data = api.get(`/users/schedule/clientTimeSlot/${user!.id}`)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }, [user])

    return (
        <>

            <ToastContainer />
            <section className="flex min-h-screen flex-col m-auto">
                <div className="">
                    <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">Agenda</h1>
                            <p className="text-muted-foreground">Seus agendamentos</p>
                        </div>
                        <Link to="/schedule">
                            <button className="mt-4 sm:mt-0 btn">Gerenciar horários</button>
                        </Link>
                    </div>

                    <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                        <div className="space-y-8">
                            <div>
                                <div>
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-full bg-red-400 p-2">
                                            <h1 className="px-2">{user?.name[0]}</h1>
                                        </div>
                                        <div>
                                            <p className="font-medium">{user?.name}</p>
                                            <p className="text-sm text-muted-foreground">{user?.email}</p>
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
                                    <h1>Meus Agendamentos</h1>
                                </div>

                                <div>
                                    <div >

                                        {/* <div className="mt-6">
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

                                                                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                                                                        <button className="sm:flex-1 btn">
                                                                            Remarcar Horário
                                                                        </button>

                                                                        <div>
                                                                            <div >
                                                                                <button
                                                                                    className="text-destructive hover:text-destructive sm:flex-1 btn"
                                                                                    onClick={() => setCancelingAppointmentId(appointment.id)}
                                                                                >
                                                                                    Cancelar
                                                                                </button>
                                                                            </div>
                                                                            Isso pode ser um modal que abre quando clica no botão de cancelar
                                                                            
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
                                                    <p className="text-muted-foreground">Você não tem horários marcados.</p>
                                                    <Link to="/barbers">
                                                        <button className="mt-4">Marcar um horário</button>
                                                    </Link>
                                                </div>
                                            )}
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}