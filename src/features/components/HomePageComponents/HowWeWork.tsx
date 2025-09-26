import { useContext } from "react"
import { UserContext } from "../../../providers/Authprovider"

export const HowWeWork = () => {

    const { user } = useContext(UserContext)
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


    return (
        <section className="px-4 pb-20 max-w-7xl m-auto">
            {user === null ?
                <>
                    <h2 className="text-4xl font-bold text-center tracking-tight sm:text-5xl md:text-6xl text-shadow-2xs mb-12">
                        Como funcionamos
                    </h2>

                    <div className="min-sm:flex items-center flex-wrap justify-center lg:px-12 xl:px-0 sm:gap-6">
                        {howWeWork.map((item) => {
                            return (
                                <div key={item.id} className="flex flex-col border border-base-200 rounded-2xl m-2 max-sm:m-8 pb-2 px-4">
                                    <div className="flex flex-col items-center justify-between text-center sm:w-2xs sm:h-full gap-4">
                                        <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-base-200 mt-4 text-2xl font-bold text-primary">
                                            {item.id}
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-primary text-xl sm:text-2xl font-bold">{item.title}</h3>
                                            <p className="text-secondary/70 my-2 text-base sm:text-xl">
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
                <div className="px-4 py-16 ">
                    <div className="w-full">

                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl text-shadow-2xs mb-12">Agende agora seu horário</h2>
                    </div>
                </div>
            }
        </section>
    )
}