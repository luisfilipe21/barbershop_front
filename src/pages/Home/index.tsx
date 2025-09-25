import { useContext, useEffect } from "react"
import { UserContext } from "../../providers/Authprovider"
import { ToastContainer } from "react-toastify"
import { AboutUs } from "../../features/components/HomePageComponents/AboutUs"
import { HowWeWork } from "../../features/components/HomePageComponents/HowWeWork"
import { BarbersDisplay } from "../../features/components/HomePageComponents/BarbersDisplay"
import { Presentation } from "../../features/components/HomePageComponents/Presentation"

export const Home = () => {
    const { barber, getAllBarbers } = useContext(UserContext)

    useEffect(() => {
        if (barber?.length !== 0) {
            return
        }
        getAllBarbers()
    }, [])

    return (
        <main className="flex flex-col justify-center m-auto bg-secondary-content">
            <ToastContainer />
            <Presentation />
            <AboutUs />
            <HowWeWork />
            <BarbersDisplay />
        </main>
    )
}