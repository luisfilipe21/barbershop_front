import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../providers/Authprovider"
import type { IReturnBarber } from "../../interfaces/interfaces"
import placeholder from "../../assets/barbeiro_identico_embedded.svg"
export const BarbersComponent = () => {
    const { barber } = useContext(UserContext)
    const navigate = useNavigate();

    const handleBarber = (barber: IReturnBarber) => {
        navigate(`/user/schedule/${barber.id}`)
    }


    return (
        <>
            <div className="flex flex-col gap-6">
                {barber?.map((barber, index) => (
                    <div
                        key={index}
                        className="rounded-lg border bg-primary/35 shadow-sm transition-all hover:shadow"
                    >
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={placeholder}
                                alt={barber.name}
                                className="h-full w-full object-cover rounded-t-lg"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-xl">{barber.name}</h3>
                            <p className="text-base">
                            ({barber.phone.slice(0, 2)}) {barber.phone.slice(2,7)}-{barber.phone.slice(7,11)} 
                            </p>
                            <button className="btn btn-secondary mt-4 w-full" onClick={() => handleBarber(barber)}>
                                Ver perfil
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}