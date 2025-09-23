import { useContext } from "react"
import { UserContext } from "../../../providers/Authprovider"
import { Link } from "react-router-dom"

export const AboutUs = () => {


    const { user } = useContext(UserContext)

    return (

        <section className="px-4 py-20 max-w-7xl m-auto">
            {!user ?
                <div className="flex flex-col items-center text-center  gap-6 max-sm:px-2">
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
                        <Link to="/register">
                            <button className="btn btn-primary gap-2">
                                Cadastrar
                            </button>
                        </Link>
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
    )
}