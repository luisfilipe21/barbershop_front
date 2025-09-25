export const Presentation = () => {
    return (
        <section className="w-full max-sm:max-h-[550px] max-h-[750px] h-full bg-custom absolute top-0">
            <div className="flex flex-col items-center bg-black/45 justify-center m-auto gap-8 h-full px-2">
                <h1 className="text-5xl min-sm:text-7xl font-inter font-light text-accent-content text-shadow-accent-content">
                    <span className="text-primary">On</span>Barber
                </h1>
                <div className="flex flex-col items-center justify-center gap-4 min-sm:gap-8">
                    <p className="font-bold text-center text-accent-content text-shadow-accent-content text-lg min-sm:text-xl">
                        Garantindo seu atendimento em poucos cliques
                    </p>
                    <button className="btn btn-primary">
                        Conheça nossos serviços
                    </button>
                </div>
            </div>
        </section>
    )
}