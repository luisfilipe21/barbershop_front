"use client"
import { useContext } from "react"
import { UserContext } from "../../providers/Authprovider"
import { IoIosCloseCircle } from "react-icons/io"
import { Link } from "react-router-dom"
import { motion } from "motion/react"


export const MenuModal = () => {
    const { openMenu } = useContext(UserContext)


    return (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} 
className = "absolute w-full h-full top-0 right-0 flex" >
    <div className="flex items-center justify-center w-full bg-base-300/15 foreground">
        <div className="relative">
            <span className="absolute top-1 right-1">
                <IoIosCloseCircle onClick={openMenu} className="w-6 h-6 text-neutral" />
            </span>
            <nav className="flex items-center text-center w-36 h-28 ">
                <ul className="flex flex-col items-center justify-around bg-accent w-full h-full rounded-2xl">
                    <li><Link to="/login" className="text-sm  font-medium hover:underline cursor-pointer" onClick={openMenu}>
                        Login
                    </Link></li>
                    <li> <Link to="/register">
                        <button className="text-sm  font-medium hover:underline cursor-pointer" onClick={openMenu}>Cadastro</button>
                    </Link></li>
                </ul>
            </nav>
        </div>

    </div>
        </motion.div >
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