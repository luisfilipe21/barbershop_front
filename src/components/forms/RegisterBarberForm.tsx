import { Link, useNavigate } from "react-router-dom";
import type { ICreateBarber } from "../../interfaces/interfaces";
import { useForm } from "react-hook-form";
import { api } from "../../service/api";
import { Inputs } from "../inputs";


export const RegisterBarberForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ICreateBarber>();
    const navigate = useNavigate();

    const submit = async (payload: ICreateBarber) => {
        try {
            console.log(payload)
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
                    <Inputs
                    {...register("role")}
                        id="role"
                        placeholder="Barbeiro"
                        type="radio"
                        value="BARBER"
                        label="Barbeiro"
                    />
                </div>

                <div className="flex flex-col p-3 mt-4">
                    <button className="w-full btn btn-primary" type="submit">
                        {/* disabled={isLoading} */}
                        Criar conta
                        {/* {isLoading ? "Creating account..." : "Create Account"} */}
                    </button>
                    <p className="mt-2 text-center text-sm text-muted-foreground">
                        Já possui conta? <span>      </span>
                        <Link to="/login" className="text-primary hover:underline">
                            Entrar
                        </Link>
                    </p>
                </div>
            </form>
        </>
    )
}