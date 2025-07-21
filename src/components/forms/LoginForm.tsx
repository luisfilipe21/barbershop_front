import { Link } from "react-router-dom"
import { Inputs } from "../inputs"
import { useForm } from "react-hook-form";
import { UserContext } from "../../providers/Authprovider";
import { useContext } from "react";

export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { login } = useContext(UserContext)
    return (
        <form onSubmit={handleSubmit(login)}>
            <div className="py-4">
                <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
                <p>Insira e-mial e senha para continuar</p>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Inputs
                        {...register("email")}
                        type="email"
                        placeholder="nome@examplo.com"
                        id="email"
                        label="E-mail" />
                </div>
                <div className="space-y-2">
                    
                    <Inputs
                        {...register("password")}
                        type="password"
                        placeholder="**********"
                        id="password"
                        label="Senha"
                    />
                </div>
            </div>
            <div className="flex flex-col mt-2">
                <button className="w-full btn"  type="submit">
                    {/* {isLoading ? "Signing in..." : "Sign In"} */}
                    Entrar
                </button>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                    Não tem conta?{" "}
                    <Link to="/register" className="text-primary hover:underline">
                        Cadastre-se
                    </Link>
                </p>
            </div>
        </form>

    )
}