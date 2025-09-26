import { Link, useNavigate } from "react-router-dom"
import { Inputs } from "../inputs"
import { useForm } from "react-hook-form";
import type { ICreateBarber } from "../../interfaces/interfaces";
import { api } from "../../service/api";

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ICreateBarber>();
    const navigate = useNavigate();

    const submit = async (payload: ICreateBarber) => {
        try {
            await api.post("/users", payload)
            navigate("/login")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <div className="">
                    <Inputs {...register("name")}
                        id="nome"
                        placeholder="Nome"
                        type="text"
                    />
                    <Inputs {...register("email")}
                        id="email"
                        placeholder="E-mail"
                        type="email"
                    />
                    <Inputs {...register("phone")}
                        id="phone"
                        placeholder="(99) 99999-9999"
                        type="tel"
                    />
                    <Inputs {...register("password")}
                        id="password"
                        placeholder="Senha"
                        type="password"
                    />
                </div>

                <div className="flex flex-col p-3 mt-4">
                    <button className="w-full btn btn-primary " type="submit">
                        {/* disabled={isLoading} */}
                        Criar conta
                        {/* {isLoading ? "Creating account..." : "Create Account"} */}
                    </button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                        Já tem conta?{" "}
                        <Link to="/login" className="text-primary hover:underline">
                            Entrar
                        </Link>
                    </p>
                </div>
            </form>
        </>
    )
}