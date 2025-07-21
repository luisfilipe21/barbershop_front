import { useContext } from "react"
import { Inputs } from "../inputs"
import { UserContext } from "../../providers/Authprovider"
import { useForm } from "react-hook-form"
import { api } from "../../service/api"
import type {  IScheduleCreate } from "../../interfaces/interfaces"

export const ScheduleModal = () => {

    const { modal, setModal, user, setUser } = useContext(UserContext)
    const { register, handleSubmit } = useForm<IScheduleCreate>()


    const closeModal = () => {
        setModal(false)
    }

   
    const createSchedule = async (payload: IScheduleCreate) => {
        const token = localStorage.getItem("@Token")
        const barber = user?.sub


        if (!barber) {
            console.log("sem user")
            return
        }

        if (!token) {
            console.log("sem token")
            return
        }

        try {
            const teste = await api.post(`/users/schedule/${barber}`, { id: barber, date: payload.date, startTime: payload.startTime, endTime: payload.endTime }, { headers: { Authorization: `Bearer ${token}` } })

            return teste
        } catch (error) {
            console.log("error")
            console.log(error)
        }

        // setModal(false)

    }

    return (
        <>
            {modal ?
                <div className="flex justify-center m-auto w-full h-full fixed inset-0 ">
                    <div className=" bg-amber-50 m-auto w-80 h-96 rounded-2xl relative">
                        <span onClick={closeModal} className="font-bold text-black absolute right-4 top-2 hover:cursor-pointer">X</span>
                        <div className="flex flex-col justify-center items-center ">
                            <form onSubmit={handleSubmit(createSchedule)}>
                                <Inputs
                                    {...register("date")}
                                    id="dia"
                                    label="Dia"
                                    placeholder="Dia"
                                    type="date" />

                                <Inputs
                                    {...register("startTime")}
                                    id="inicio"
                                    label="Início"
                                    placeholder="Hora de inicio"
                                    type="time" />

                                <Inputs
                                    {...register("endTime")}
                                    id="fim"
                                    label="Fim"
                                    placeholder="Horário estimado de término"
                                    type="time" />

                                <button type="submit" className="btn flex w-full mt-4">
                                    Criar horário na agenda
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                : null}
        </>
    )
}