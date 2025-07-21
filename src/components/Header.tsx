import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../providers/Authprovider"

export const Header = () => {

    const { user, logout } = useContext(UserContext)

    const loggedUser = () => {
        return (
            <nav className="flex items-center gap-4 ">
                <div className="rounded-full">
                    <h1 className="text-secondary font-bold text-xl py-1 px-3">
                        {user?.role === "BARBER" ?

                            <Link to="/barber/dashboard">
                                {user?.name[0].toLocaleUpperCase()}
                            </Link>
                            :

                            <Link to="/user">
                                {user?.name[0].toLocaleUpperCase()}
                            </Link>
                        }
                    </h1>

                </div>
                <button onClick={logout} className="gap-2 btn">
                    Logout
                </button>
            </nav>
        )
    }
    return (
        <header className="border-b">
            <div className="container flex h-16 items-center justify-between m-auto">
                <div className="flex items-center gap-2 font-bold text-xl">
                    <Link to="/"> <span className="text-primary">Precision</span> Cuts</Link>
                </div>

                {user ? loggedUser() :
                    <nav className="flex items-center gap-4">
                        <Link to="/login" className="text-sm font-medium hover:underline btn">
                            Login
                        </Link>
                        <Link to="/register">
                            <button className="text-sm font-medium hover:underline btn-primary">Cadastro</button>
                        </Link>
                    </nav>
                }

            </div>
        </header>
    )
}