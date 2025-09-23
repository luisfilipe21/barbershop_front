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
        <section className="px-4 py-20 max-w-7xl m-auto">
            {user === null ?
                <>
                    <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-center mb-18">Como funcionamos</h2>

                    <div className="min-sm:flex items-center flex-wrap justify-center sm:gap-6">
                        {howWeWork.map((item) => {
                            return (
                                <div key={item.id} className="flex flex-col justify-start gap-8 h-full">
                                    <div className="flex flex-col items-center justify-start text-center sm:w-2xs sm:h-full">
                                        <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-accent my-4 text-2xl font-bold ">
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
                <div className="px-4 py-16 ">
                    <div className="w-full">

                        <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-center mb-12">Agende agora seu horário</h2>
                    </div>
                </div>
            }
        </section>
    )
}