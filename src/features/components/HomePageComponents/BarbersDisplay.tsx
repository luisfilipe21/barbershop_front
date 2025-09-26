import { BarbersComponent } from "../../../components/barbers"

export const BarbersDisplay = () => {
    return (

        <section className="bg-secondary/40 w-full max-w-7xl m-auto">
            <div className=" px-4 py-16 sm:pb-28 ">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-18">Barbeiros</h2>
                <BarbersComponent />
            </div>
        </section>
    )
}