export const Footer = () => {
    return (
        <footer className="w-full m-auto py-6 bg-primary">
            <div className="max-w-7xl flex flex-col items-center justify-between min-sm:px-8 gap-4 md:flex-row m-auto">
                <p className="text-sm font-bold">© 2025 Precision Cuts. Criado por Luis Filipe.</p>
                <nav className="flex gap-4 font-bold">
                    <a href="#" className="text-sm hover:underline">
                        Contact Us
                    </a>
                    <a href="/registerBarber" className="text-sm hover:underline">
                        Seja um Barbeiro Parceiro
                    </a>
                </nav>
            </div>
        </footer>
    )
}