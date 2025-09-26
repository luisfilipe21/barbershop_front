import { Link } from "react-router-dom"
import { LoginForm } from "../../components/forms/LoginForm"


export const Login = () => {


    return (
        <>
            <section className="flex h-screen w-screen flex-col items-center justify-center m-auto max-w-7xl">
                <Link to="/" className="absolute left-4 top-4 md:left-8 md:top-8">
                    <button className="btn">Voltar</button>
                </Link>
                <div className="flex flex-col justify-center space-y-6 w-2xs outline-2 p-4 rounded-2xl">
                    <div className="flex flex-col space-y-2 text-center">
                        {/* <div className="flex justify-center">
                            <Scissors className="h-8 w-8 text-primary" />
                        </div> */}
                        <div >
                            <h1 className="text-2xl font-semibold tracking-tight">OnBarber</h1>
                        </div>
                    </div>
                    <LoginForm />
                </div>
            </section>
        </>
    )
}