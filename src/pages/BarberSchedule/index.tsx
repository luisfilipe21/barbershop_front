import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../providers/Authprovider"
import { Link, useParams } from "react-router-dom"
import type { IReturnBarber } from "../../interfaces/interfaces"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import logo from "../../../public/logo.png"

export const BarberSchedule = () => {
    const { id } = useParams()
    const { getBarberById, getOneBarberSchedule } = useContext(UserContext)

    const [oneBarber, setOneBarber] = useState<IReturnBarber>()

    useEffect(() => {
        const fetchOneBarber = async () => {
            setOneBarber(await getOneBarberSchedule(Number(id!)))
        }
        fetchOneBarber()
    }, [id, getBarberById])

    if (!oneBarber) return <h1>Loading</h1>

    const getTime = (appointment: string) => {
        const hours = new Date(appointment).getHours().toLocaleString("pt-BR", { minimumIntegerDigits: 2 })
        const minutes = new Date(appointment).getMinutes().toLocaleString("pt-BR", { minimumIntegerDigits: 2 })
        const fullTime = `${hours}:${minutes}`
        return fullTime
    }

    const fullDate = (appointment: Date) => {
        const dateString = appointment.toLocaleString("pt-BR")
        const util = dateString.split("T")
        const [ano, mes, dia] = util[0].split("-")
        const date = `${dia}/${mes}/${ano}`
        return date
    }

    const noTimeAvailable = () => {
        return (
            <div className="w-full m-auto">
                <div className="flex flex-col items-center justify-center py-4">
                    <figure>
                        <img src={logo} alt="Logo" width={300} color="#ffffff" />
                    </figure>
                </div>
                <div className="flex flex-col items-center justify-center gap-5 py-4 m-auto w-full">
                    <h1 className="text-xl font-bold">
                        Parece que esse barbeiro não abriu sua agenda ou todos seus horários foram reenchidos.
                    </h1>
                    <p className="text-3xl font-bold">Que tal escolher outro barbeiro?</p>
                    <Link to="/" className="btn">Clique aqui e escolha outro barbeiro</Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <Header />
            <main className="flex-1 py-10">

                <div className="container m-auto">

                    <div className="flex flex-wrap justify-center w-full">

                        <div className="w-full px-8">

                            {/* espaço para listar qual o nome da barbearia e endereço 
                            <div className="w-1/3">
                                <div className="aspect-square overflow-hidden bg-red-700">
                                    <div className="">
                                        <h1>{user!.name}</h1>
                                        <h1>{user!.email}</h1>
                                        <h1>{user!.phone}</h1>
                                    </div>

                                </div>
                            </div> */}
                            <div className="py-4">

                                <h2 className="text-xl font-bold">Marque seu horário</h2>
                                <p className="text-muted-foreground">Selecione quando quer ser atendido</p>
                            </div>
                        </div>
                        {oneBarber?.Schedule.length <= 0 ? (<> {noTimeAvailable()}</>) : null}
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
                                                        {fullDate(data.date)}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium">Horário</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {getTime(data.startTime)}
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