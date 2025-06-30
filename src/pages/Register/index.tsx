import { RegisterForm } from "../../components/forms/RegisterForm"


export const Register = () => {


    return (
        <>
            <div className="container flex h-screen w-screen flex-col items-center justify-center m-auto ">
                <a href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
                    <button className="btn">Back</button>
                </a>

                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] outline-2 p-4 rounded-2xl">
                    <div className="flex flex-col space-y-2 text-center">
                        <div className="flex justify-center">
                            {/* <Scissors className="h-8 w-8 text-primary" /> */}
                        </div>
                        <h1 className="text-2xl font-semibold tracking-tight">Crie sua conta</h1>
                        <p className="text-sm text-muted-foreground">Você vai precisar desses dados</p>
                    </div>


                    <div>
                        <RegisterForm />    
                    </div>
                </div>
            </div>
        </>
    )
}