export const Presentation = () => {
    return (
        <section className="w-full h-screen bg-custom absolute top-0">
            <div className="flex flex-col items-center bg-black/35 justify-center m-auto gap-8 h-full px-2">
                <h1 className="text-4xl font-inter font-light text-primary">
                    OnBarber
                </h1>
                <div className="flex flex-col items-center justify-center gap-4">
                    <p>
                        Garantindo seu atendimento em poucos cliques
                    </p>
                    <button className="btn btn-soft btn-primary">
                        Conheça nossos serviços
                    </button>
                </div>
            </div>
        </section>
    )
}