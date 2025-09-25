export const Footer = () => {
    return (
        <footer className="w-full max-w-7xl m-auto py-6">
            <div className=" flex flex-col max-md:flex-col-reverse items-center justify-between min-sm:px-8 gap-4 md:flex-row m-auto">
                <p className="text-sm font-bold">© 2025 OnBarber - Criado por Luis Filipe.</p>
                <nav className="flex gap-4 font-bold">
                    <a href="#" className="text-sm hover:underline">
                        Entre em contato
                    </a>
                    <a href="/registerBarber" className="text-sm hover:underline">
                        Seja um Barbeiro Parceiro
                    </a>
                </nav>
            </div>
        </footer>
    )
}