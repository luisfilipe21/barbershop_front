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
    <>
      <Header />
      <AnimatePresence>
        {menu ? <MenuModal /> : null}
      </AnimatePresence>

      <main className="flex flex-col m-auto max-w-7xl">
        <RoutesMain />
      </main>
      <Footer />
    </>
  )
}

export default App
