import "cally";
import { useContext } from "react"
import { UserContext } from "../../../providers/Authprovider"

export const BarberAgendaComponent = () => {
    const { setModal } = useContext(UserContext)

    const openModal = () => {
        setModal(true)
    }

    return (
        <section>

            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-4xl font-bold">Agenda</h1>
                    <p className="text-muted-foreground">Controle seus agendamentos</p>
                </div>

                <button className="mt-4 sm:mt-0 btn" onClick={openModal}>Gerenciar horários</button>

            </div>
            <div>
                <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
                    <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                    <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                    <calendar-month></calendar-month>
                </calendar-date>
            </div>
        </section>
    )
}