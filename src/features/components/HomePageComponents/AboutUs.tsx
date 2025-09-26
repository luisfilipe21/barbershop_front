import { useContext } from "react"
import { UserContext } from "../../../providers/Authprovider"
import { Link } from "react-router-dom"
import { SingleBarberComponent } from "../../../components/barber"

export const AboutUs = () => {


    const { user } = useContext(UserContext)
    return (

        <section className="flex flex-col justify-center items-center px-4 py-20 max-w-7xl m-auto max-sm:mt-[680px] mt-[750px]">
            {!user ?
                <div className="w-full flex flex-col items-center justify-center gap-6 max-sm:px-2">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-shadow-2xs">
                        Sobre a OnBarber
                    </h1>
                    <p className="mt-6 max-sm:max-w-[600px] px-4 font-medium text-primary-content text-lg min-sm:text-xl text-left">
                        O <b>OnBarber</b> site foi criado para facilitar sua vida. Garantindo seu horário de atendimento com o barbeiro de sua preferência. Visualize os horários disponíveis em tempo real e reserve seu atendimento em poucos cliques. Sem ligações, sem complicação.
                        Basta selecionar o profissional, escolher o dia e o horário que melhor se encaixam na sua rotina e pronto — sua vaga estará garantida.
                    </p>
                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                        <Link to="/barber">
                            <button className="btn btn-accent" >
                                Conheça nossos Barbeiros
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-primary gap-2">
                                Cadastrar
                            </button>
                        </Link>
                    </div>
                </div>
                :
                <div className="container flex flex-col items-center text-center gap-2 max-sm:px-2">
                    {user.role === "CLIENT" ?
                        <>
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                                    Sua próxima seção está marcada com o:
                                </h1>
                                <SingleBarberComponent/>
                                {/* <p className="mt-6 max-w-[600px] md:text-xl">
                                    Puxar aqui os dados do próximo atendimento.
                                </p> */}
                            </div>
                        </>
                        :
                        <>
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                                    Seu próximo atendimento é com:
                                </h1>
                                <p className="mt-6 max-w-[600px] md:text-xl">
                                    Puxar aqui os dados do próximo atendimento.
                                </p>
                            </div>
                        </>
                    }


                </div>
            }
        </section>
    )
}