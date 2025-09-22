import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../providers/Authprovider"
import { AiOutlineShop } from "react-icons/ai";
export const Header = () => {

    const { user, logout, openMenu } = useContext(UserContext)



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
        <header className="w-full m-auto max-w-7xl bg-secondary/35">
            <div className="container flex items-center justify-center min-sm:py-4 m-auto min-sm:px-8">
                <div className="flex items-center justify-between w-full gap-2 py-2 font-bold text-xl">
                    <Link to="/">
                        <span className="text-primary">Precision</span> Cuts
                    </Link>


                    {user ? loggedUser() :
                        <>
                            <nav className="gap-4 max-sm:hidden">
                                <ul className="flex items-center gap-4">
                                    <li>
                                        <Link to="/login" className="text-sm hover:underline cursor-pointer sm:text-lg font-bold btn btn-accent">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/register">
                                            <button className="text-sm hover:underline cursor-pointer sm:text-lg font-bold">Cadastro</button>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                            <div className="sm:hidden">
                                <span className="cursor-pointer">
                                    <AiOutlineShop onClick={openMenu} className="text-3xl text-primary" />
                                </span>
                            </div>
                        </>
                    }
                </div>
            </div>
        </header>
    )
}