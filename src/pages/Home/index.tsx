import { useContext, useEffect } from "react"
import { UserContext } from "../../providers/Authprovider"
import { Link } from "react-router-dom"
import { BarbersComponent } from "../../components/barbers"
import { ToastContainer } from "react-toastify"
import { AboutUs } from "../../features/components/HomePageComponents/AboutUs"
import { HowWeWork } from "../../features/components/HomePageComponents/HowWeWork"
import { BarbersDisplay } from "../../features/components/HomePageComponents/BarbersDisplay"

export const Home = () => {
    const { barber, getAllBarbers } = useContext(UserContext)

    useEffect(() => {
        if (barber?.length !== 0) {
            return
        }
        getAllBarbers()
    }, [])

    return (
        <>
            <ToastContainer />
            <AboutUs/>
           <HowWeWork/>
           <BarbersDisplay/>
        </>
    )
}