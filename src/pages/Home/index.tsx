import { useContext, useEffect } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { UserContext } from "../../providers/Authprovider"
import { Link } from "react-router-dom"
import { BarbersComponent } from "../../components/barbers"

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
            <div className="flex min-h-screen flex-col ">
                <Header />
                <main className="flex-1 m-auto">
                    {!user ?
                        <section className="bg-muted/40 py-20 md:py-32">
                            <div className="container flex flex-col items-center text-center">
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                    Agende seu horário <span className="text-primary">agora</span>
                                </h1>
                                <p className="mt-6 max-w-[600px] text-muted-foreground md:text-xl">
                                    Garanta seu horário com seu barbeiro de maneira rápida e prática.
                                </p>
                                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                    <Link to="/register">
                                        <button className="btn btn-primary gap-2">
                                            Cadastrar
                                        </button>
                                    </Link>
                                    <Link to="/barber">
                                        <button className="btn" >
                                            Barbeiros (setinha direita)
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                        : null}

                    <section className="py-20">
                        {!user ?
                            <div className="container">
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
                            <div className="container">
                                <div className="w-full">

                                    <h2 className="text-5xl font-bold tracking-tight text-center mb-12">Agende agora seu horário</h2>
                                </div>
                            </div>
                        }

                    </section>

                    <section className="bg-muted/40 py-10">
                        <div className="container">
                            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Barbeiros</h2>
                            <BarbersComponent />
                        </div>
                    </section>

                </main>
                <Footer />
            </div>
        </>
    )
}