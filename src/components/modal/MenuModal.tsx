import { useContext } from "react"
import { UserContext } from "../../providers/Authprovider"
import { IoIosCloseCircle } from "react-icons/io"
import { AiOutlineShop } from "react-icons/ai"
import { Link } from "react-router-dom"
import { motion } from "motion/react"


export const MenuModal = () => {
    // const { user, logout, openMenu, menu } = useContext(UserContext)


    return (
        <div className="absolute w-full top-0 right-0 py-4 px-2 flex bg-red-200">
            <div className="relative w-full p-0.5 border-1 border-black ">
                <div>
                    <span className="absolute top-[-1rem] right-0">
                        <IoIosCloseCircle />
                    </span>
                    <div>

                        <nav className="flex items-center justify-end text-center gap-4">
                            <ul className="flex flex-col bg-red-200">
                                <li> <Link to="/login" className="text-sm font-medium hover:underline ">
                                    Login 2
                                </Link></li>
                                <li> <Link to="/register">
                                    <button className="text-sm font-medium hover:underline">Cadastro 2</button>
                                </Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </div>
    )
}

//  <span className="cursor-pointer">
//                 <AiOutlineShop onClick={openMenu} className="text-3xl absolute top-[-1rem] right-[-2rem]" />
//             </span>

//             {menu ?
//                 <div onClick={() => openMenu} className="relative">
//                     <span className="absolute cursor-pointer">
//                         <IoIosCloseCircle onClick={openMenu} />
//                     </span>
//                     <nav className="flex items-center gap-4 absolute left-8 ">
//                         <ul className="flex flex-col bg-red-200">
//                             <li> <Link to="/login" className="text-sm font-medium hover:underline btn">
//                                 Login 2
//                             </Link></li>
//                             <li> <Link to="/register">
//                                 <button className="text-sm font-medium hover:underline btn-primary">Cadastro 2</button>
//                             </Link></li>
//                         </ul>
//                     </nav>
//                 </div> : null}