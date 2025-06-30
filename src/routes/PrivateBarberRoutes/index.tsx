import { useContext } from "react"
import { UserContext } from "../../providers/Authprovider"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateBarberRoutes = () => {
    const {user} = useContext(UserContext)

    return (
        user?.role === "BARBER" ? <Outlet/> : <Navigate to="/"/>
    )
}