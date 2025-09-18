import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { RoutesMain } from "./routes"

function App() {

  return (
    <>
      <Header />
      <main className="flex py-10 m-auto max-w-7xl">
        <RoutesMain />
      </main>
      <Footer />
    </>
  )
}

export default App
