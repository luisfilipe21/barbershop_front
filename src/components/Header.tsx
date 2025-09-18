import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../providers/Authprovider"
import { AiOutlineShop } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
export const Header = () => {

    const { user, logout, openMenu, menu } = useContext(UserContext)



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
        <header className="w-full m-auto max-w-7xl">
            <div className="container flex items-center justify-center max-sm:p-8 m-auto">
                <div className="flex items-center justify-between w-full gap-2 py-4 font-bold text-xl">
                    <Link to="/">
                        <span className="text-primary">Precision</span> Cuts
                    </Link>


                    {user ? loggedUser() :
                        <>
                            <nav className="gap-4 max-sm:hidden">
                                <ul className="flex items-center gap-4">
                                    <li>
                                        <Link to="/login" className="text-sm font-medium hover:underline cursor-pointer">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/register">
                                            <button className="text-sm font-medium hover:underline cursor-pointer">Cadastro</button>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                            <div className="sm:hidden">
                                <span className="cursor-pointer">
                                    <AiOutlineShop onClick={openMenu} className="text-3xl" />
                                </span>
                            </div>
                        </>
                    }
                </div>
            </div>
        </header>
    )
}