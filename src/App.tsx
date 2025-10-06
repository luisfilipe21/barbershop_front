import { useContext } from "react"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { MenuModal } from "./components/modal/MenuModal"
import { RoutesMain } from "./routes"
import { UserContext } from "./providers/Authprovider"
import { AnimatePresence } from "motion/react"

function App() {

  const { menu } = useContext(UserContext)
  return (
    <div className="relative">
      <Header />
      <AnimatePresence>
        {menu ? <MenuModal /> : null}
      </AnimatePresence>
      
      <RoutesMain />

      <Footer />
    </div>
  )
}

export default App
