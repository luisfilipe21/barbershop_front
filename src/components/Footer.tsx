export const Footer = () => {
    return (
        <footer className="border-t py-6 bg-primary">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row m-auto">
                <p className="text-sm text-muted-foreground">© 2025 Precision Cuts. Criado por Luis Filipe.</p>
                <nav className="flex gap-4">
                    <a href="#" className="text-sm text-muted-foreground hover:underline">
                        Contact Us
                    </a>
                    <a href="/registerBarber" className="text-sm text-muted-foreground hover:underline">
                        Seja um Barbeiro Parceiro
                    </a>
                </nav>
            </div>
        </footer>
    )
}