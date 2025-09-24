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

        <div className="flex max-sm:flex-col justify-around flex-wrap gap-10">
            {barber?.map((barber, index) => (
                <div
                    key={index}
                    className="card bg-base-100 w-48 min-sm:w-96 shadow-sm hover:shadow-2xl"
                >
                    <figure className="aspect-square overflow-hidden">
                        <img
                            src={placeholder}
                            alt={barber.name}
                            className="h-full w-full object-cover rounded-t-lg"
                        />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title">{barber.name}</h3>
                        <p className="text-base">
                            ({barber.phone.slice(0, 2)}) {barber.phone.slice(2, 7)}-{barber.phone.slice(7, 11)}
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={() => handleBarber(barber)}>
                                Conheça o Profissional
                            </button>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}