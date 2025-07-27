import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../providers/Authprovider"
import { useParams } from "react-router-dom"
import type { IReturnBarber } from "../../interfaces/interfaces"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export const BarberSchedule = () => {
    const { id } = useParams()
    const { getBarberById, user } = useContext(UserContext)

    const [oneBarber, setOneBarber] = useState<IReturnBarber>()

    useEffect(() => {
        const fetchOneBarber = async () => {
            const oneBarberData = await getBarberById(Number(id!))
            console.log(oneBarberData)

            setOneBarber(oneBarberData)
        }
        fetchOneBarber()

    }, [id, getBarberById])

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

                    <div className="p-6">

                        <h2 className="text-xl font-bold">Marque seu horário</h2>
                        <p className="text-muted-foreground">Selecione quando quer ser atendido</p>
                    </div>
                    <div className="flex flex-wrap justify-center w-full ">

                        {/* <div>
                        <div>
                            <div className="aspect-square overflow-hidden bg-red-700">


                            </div>
                        </div>
                    </div> */}

                        {oneBarber?.Schedule.map((data) => (

                            <div key={data.id} className="flex flex-wrap justify-center w-60">
                                <div className="p-6">

                                    <div className="mt-8">
                                        <div className="mt-2 rounded-lg border p-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-sm font-medium">Barberiro</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {oneBarber.name}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium">Serviços</p>
                                                    <p className="text-sm text-muted-foreground">Cabelo e Barba</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium">Data</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {data.date}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium">Horário</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {data.startTime}
                                                    </p>
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
                </div>
            </main>
            <Footer />


        </>
    )
}