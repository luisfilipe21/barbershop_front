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
            
            <div className="flex flex-col justify-center">
                <Inputs
                    {...register("email")}
                    type="email"
                    placeholder="E-mail"
                    id="email"
                />

                <Inputs
                    {...register("password")}
                    type="password"
                    placeholder="Senha"
                    id="password"
                />

            </div>
            <div className="flex flex-col mt-4 px-3">
                <button className="w-full btn btn-primary" type="submit">
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