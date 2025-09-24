import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../providers/Authprovider"
import { AiOutlineShop } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
export const Header = () => {

    const { user, logout, openMenu } = useContext(UserContext)
    const [scrollY, setScrollY] = useState<number>(0);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])

    useEffect(() => {
        controls.start({
            backgroundColor: scrollY > 90 ? 'rgb(38, 27, 37)' : 'rgba(0, 0, 0, 0)',
            transition: { duration: 0.1, ease: "easeInOut" },
        });
    }, [scrollY, controls]);

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
        <header className={`w-full m-auto relative z-50`}>
            <motion.div animate={controls} className="w-full fixed max-w-7xl flex items-center justify-center m-auto px-4 min-sm:py-4 min-sm:px-8 top-0 z-50">
                <div className="flex items-center justify-between w-full gap-2 py-1 font-thin text-2xl hover:underline">
                    <Link to="/">
                        <span className="text-primary">On</span>Barber
                    </Link>


                    {user ? loggedUser() :
                        <>
                            <nav className="gap-4 max-sm:hidden">
                                <ul className="flex items-center gap-4">
                                    <li>
                                        <Link to="/login" className="text-sm hover:underline cursor-pointer sm:text-lg font-bold btn btn-primary btn-outline">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/register">
                                            <button className="text-sm hover:underline cursor-pointer sm:text-lg font-bold btn btn-dash ">Cadastro</button>
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
            </motion.div>
        </header>
    )
}