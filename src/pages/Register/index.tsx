import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/forms/RegisterForm"


export const Register = () => {


    return (
        <>
            <section className="flex flex-col items-center justify-center m-auto w-full h-screen max-w-7xl">
                <Link to="/" className="absolute left-4 top-4 md:left-8 md:top-8">
                    <button className="btn">Voltar</button>
                </Link>

                <div className="flex flex-col justify-center space-y-6 w-2xs outline-2 p-4 rounded-2xl">
                    <div className="flex flex-col space-y-2 text-center">
                        <div className="flex justify-center">
                            {/* <Scissors className="h-8 w-8 text-primary" /> */}
                        </div>
                        <h1 className="text-2xl font-semibold tracking-tight">Crie sua conta</h1>
                        <p className="text-sm text-muted-foreground">Você vai precisar desses dados</p>
                    </div>
                    <RegisterForm />
                </div>
            </section>
        </>
    )
}