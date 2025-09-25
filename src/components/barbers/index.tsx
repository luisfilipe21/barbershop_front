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

        <div className="flex max-sm:flex-col items-center justify-around flex-wrap gap-10">
            {barber?.map((barber, index) => (
                <div
                    key={index}
                    className="card card-md max-sm:card-xs bg-base-100 max-sm:max-w-3xs max-sm:max-h-80 min-sm:w-3xs shadow-sm hover:shadow-2xl"
                >
                    <figure className="aspect-square overflow-hidden">
                        <img
                            src={placeholder}
                            alt={barber.name}
                            className="h-full w-full object-cover rounded-t-lg"
                        />
                    </figure>
                    <div className="card-body gap-2">
                        <h3 className="card-title text-2xl">{barber.name}</h3>
                        <p className="max-sm:text-base text-xl font-bold">
                            ({barber.phone.slice(0, 2)}) {barber.phone.slice(2, 7)}-{barber.phone.slice(7, 11)}
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary max-sm:btn-sm btn-md" onClick={() => handleBarber(barber)}>
                                Conheça o Profissional
                            </button>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}