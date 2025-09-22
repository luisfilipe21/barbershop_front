import { useContext, useEffect } from "react"
import { UserContext } from "../../providers/Authprovider"
import { Link } from "react-router-dom"
import { BarbersComponent } from "../../components/barbers"
import { ToastContainer } from "react-toastify"

export const Home = () => {
    const { barber, getAllBarbers, user } = useContext(UserContext)

    const howWeWork = [
        {
            id: 1,
            title: "Crie sua conta",
            description: "Precisamos te conhecer melhor para poder lhe atender de forma personalizada"
        },
        {
            id: 2,
            title: "Conheça os barbeiros",
            description: "Temos uma diversos barbeiros disponíveis para cuidar do seu look."
        },
        {
            id: 3,
            title: "Selecione seu horário",
            description: "Selecione o dia e o horário que melhor se encaixam na sua rotina"
        }, {
            id: 4,
            title: "Hora de ficar bonitão",
            description: "Agora é só comparecer no horário marcado e sair com o cabelo na régua"
        }
    ]

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
                    <>
                        <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-center mb-12">Como funcionamos</h2>

                        <div className="min-sm:flex items-center flex-wrap justify-center sm:gap-6">
                            {howWeWork.map((item) => {
                                return (
                                    <div key={item.id} className="flex flex-col justify-start gap-8 h-full">
                                        <div className="flex flex-col items-center justify-start text-center sm:w-2xs sm:h-full">
                                            <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary my-4 text-2xl font-bold ">
                                                {item.id}
                                            </div>
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
                                                <p className="mt-2 text-lg sm:text-xl">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </>

                    :
                    <div className="px-4 py-16 md:py-32">
                        <div className="w-full">

                            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-center mb-12">Agende agora seu horário</h2>
                        </div>
                    </div>
                }
            </section>

            <section className="bg-secondary/40">
                <div className=" px-4 py-16 sm:py-20 ">
                    <h2 className="text-5xl sm:text-6xl font-bold  text-center mb-12">Barbeiros</h2>
                    <div className="max-w-3xl">
                        <BarbersComponent />
                    </div>
                </div>
            </section>
        </>
    )
}