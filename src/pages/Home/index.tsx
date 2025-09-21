import { useContext, useEffect } from "react"
import { UserContext } from "../../providers/Authprovider"
import { Link } from "react-router-dom"
import { BarbersComponent } from "../../components/barbers"
import { ToastContainer } from "react-toastify"

export const Home = () => {
    const { barber, getAllBarbers, user } = useContext(UserContext)

    useEffect(() => {
        if (barber?.length !== 0) {
            return
        }
        getAllBarbers()
    }, [])

    return (
        <>
            <ToastContainer />
            <section className="px-4 py-20 md:py-32">
                {!user ?
                    <div className="container flex flex-col items-center text-center gap-2 max-sm:px-2">
                        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                            Agende seu horário <span className="text-accent">agora</span>
                        </h1>
                        <p className="mt-6 max-w-[600px] md:text-xl">
                            Este site foi feito para facilitar sua vida. Escolha o barbeiro de sua preferência, visualize os horários disponíveis em tempo real e reserve seu atendimento em poucos cliques. Sem ligações, sem complicação.
                            Basta selecionar o profissional, escolher o dia e o horário que melhor se encaixam na sua rotina e pronto — sua vaga estará garantida.
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Link to="/barber">
                                <button className="btn btn-accent" >
                                    Conheça nossos Barbeiros
                                </button>
                            </Link>
                            {/* <Link to="/register">
                                    <button className="btn btn-primary gap-2">
                                        Cadastrar
                                    </button>
                                </Link> */}
                        </div>
                    </div>
                    :
                    <div className="container flex flex-col items-center text-center gap-2 max-sm:px-2">
                        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                            Seu próximo atendimento é com:
                        </h1>
                        <p className="mt-6 max-w-[600px] md:text-xl">
                            Puxar aqui os dados do próximo atendimento.
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                        </div>
                    </div>
                }
            </section>

            <section className="px-4 py-20 md:py-32">
                {user === null ?
                    <div className="">
                        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Como funciona</h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                                    1
                                </div>
                                <h3 className="text-xl font-bold">Escolha seu barbeiro</h3>
                                <p className="mt-2 text-muted-foreground">
                                    Escolha sua barbearia e barbeiro de preferência.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                                    2
                                </div>
                                <h3 className="text-xl font-bold">Selecione o horário do atendimento</h3>
                                <p className="mt-2 text-muted-foreground">
                                    Veja a agenda dos barbeiros e escolha o melhor horário para você.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                                    3
                                </div>
                                <h3 className="text-xl font-bold">Hora de ficar bonitão</h3>
                                <p className="mt-2 text-muted-foreground">
                                    Agora é só aparecer no horário marcado e dar aquele tapa no visual.
                                </p>
                            </div>
                        </div>
                    </div>

                    :
                    <div className="px-4 py-20 md:py-32">
                        <div className="w-full">

                            <h2 className="text-5xl font-bold tracking-tight text-center mb-12">Agende agora seu horário</h2>
                        </div>
                    </div>
                }
            </section>

            <section className="bg-secondary/40">
                <div className=" px-4 py-20 md:py-32 ">
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Barbeiros</h2>
                    <BarbersComponent />
                </div>
            </section>
        </>
    )
}