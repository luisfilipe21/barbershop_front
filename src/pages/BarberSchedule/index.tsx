import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../providers/Authprovider"
import { useParams } from "react-router-dom"
import type { IBarber } from "../../interfaces/interfaces"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export const BarberSchedule = () => {
    const { id } = useParams()
    const { getBarberById, getOneBarberSchedule, user } = useContext(UserContext)

    const [oneBarber, setOneBarber] = useState<IBarber | null>(null)

    useEffect(() => {
        const fetchOneBarber = async () => {
            const oneBarberData = await getBarberById(Number(id!))
            const oneBarberSchedule = await getOneBarberSchedule(Number(id!))
            
            setOneBarber({...oneBarberData as IBarber, schedule: oneBarberSchedule ?? [] })
        }
        fetchOneBarber()

    }, [id, getBarberById])

    console.log(oneBarber)
    if (!oneBarber) return <h1>Loading</h1>

    return (
        <>
            <Header />
            <section>
                <div className="">
                    <h1>{user!.name}</h1>
                    <h1>{user!.email}</h1>
                    <h1>{user!.phone}</h1>
                </div>
                <div className="bg-red-700 w-full">
                    <h1>{oneBarber!.name}</h1>
                    <h1>{oneBarber!.email}</h1>
                    <h1>{oneBarber!.phone}</h1>
                    {/* <h1>{oneBarber!.schedule}</h1> */}
                </div>

            </section>



            <main className="flex-1 py-10 m-auto">
                <div className="container">
                    <div className="mb-8 flex items-center">
                        <button className="gap-1 btn-primary">
                            {/* <ChevronLeft className="h-4 w-4" /> */}
                            Voltar
                        </button>
                    </div>
                    {oneBarber?.schedule.map((data) => (

                        <div key={data.id} className="grid gap-8 md:grid-cols-[1fr_2fr]">
                            <div>
                                <div>
                                    <div className="aspect-square overflow-hidden">

                                    </div>
                                    <div className="p-6">
                                        <h1 className="text-2xl font-bold">
                                            {data?.name}
                                        </h1>


                                        <div className="mt-6 space-y-3">

                                            <div className="flex items-start gap-2">
                                                <div>
                                                    <p className="font-medium">Contact</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {data.phone}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <h2 className="font-medium">Sobre</h2>
                                            <p className="mt-2 text-sm text-muted-foreground">Sobre
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold">Book an Appointment</h2>
                                        <p className="text-muted-foreground">Select a date and time for your appointment</p>

                                        <div className="mt-8">
                                            <h3 className="font-medium">Appointment Summary</h3>
                                            <div className="mt-2 rounded-lg border p-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <p className="text-sm font-medium">Barberiro</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            {data.name}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">Serviços</p>
                                                        <p className="text-sm text-muted-foreground">Cabelo e Barba</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">Data</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            selecionar data{/* {selectedDate.display} */}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">Horário</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            escolha um horário{/* {selectedTime || "Select a time"} */}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="mt-6 w-full btn"
                                        >
                                            botão
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />


        </>
    )
}