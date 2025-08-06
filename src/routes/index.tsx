import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { Barber } from "../pages/Barbers"
import { PrivateBarberRoutes } from "./PrivateBarberRoutes"
import { BarberDashboard } from "../pages/Dashboard/BarberDashboard"
import { PrivateUserRoutes } from "./PublicUserRoutes"
import { UserDashboard } from "../pages/Dashboard/UserDashboard"
import { BarberSchedule } from "../pages/BarberSchedule"
import { RegisterBarber } from "../pages/RegisterBarber"
export const RoutesMain = () => {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registerBarber" element={<RegisterBarber />} />
            <Route path="/login" element={<Login />} />

            <Route path="/user" element={<PrivateUserRoutes />} >
                <Route index element={<UserDashboard />} />
                <Route index path="/user/schedule/:id" element={<BarberSchedule />} />
            </Route>


            <Route path="/barber" element={<PrivateBarberRoutes />}>
                <Route index element={<Barber />} />
                <Route index path="/barber/dashboard" element={<BarberDashboard />} />
            </Route>

        </Routes>
    )
}