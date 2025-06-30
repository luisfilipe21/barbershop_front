import { useContext } from "react"
import { UserContext } from "../../providers/Authprovider"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateUserRoutes = () => {
    const {user} = useContext(UserContext)

    return (
        user?.role === "CLIENT" ? <Outlet/> : <Navigate to="/"/>
    )
}