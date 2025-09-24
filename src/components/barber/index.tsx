import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../providers/Authprovider"
import type { IReturnBarber } from "../../interfaces/interfaces"
import placeholder from "../../assets/barbeiro_identico_embedded.svg"
export const SingleBarberComponent = () => {
    const { barber, user } = useContext(UserContext)
    const navigate = useNavigate();

    const handleBarber = (barber: IReturnBarber) => {
        navigate(`/user/schedule/${barber.id}`)
    }

    return (

        <div className="flex max-sm:flex-col justify-around flex-wrap gap-10">
            {user!.Schedule.length < 0 ? user?.Schedule.map((barber, index) => (
               
               <div
                    key={index}
                    className="rounded-lg border bg-primary/35 shadow-sm hover:shadow-2xl w-2xs"
                >
                    <figure className="aspect-square overflow-hidden">
                        <img
                            src={placeholder}
                            // alt={barber.name}
                            className="h-full w-full object-cover rounded-t-lg"
                        />
                    </figure>
                    <div className="p-4">
                        <h3 className="font-bold text-xl">
                            adads 
                            {/* {barber.name} */}
                            </h3>
                        <p className="text-base">
                            {/* ({barber.phone.slice(0, 2)}) {barber.phone.slice(2, 7)}-{barber.phone.slice(7, 11)} */}
                        </p>
                    </div>
                </div>
            ))
            : 
            <p>Você não tem horários marcados</p> 
            
            } 

            {/* {barber?.map((barber, index) => (
                <div
                    key={index}
                    className="rounded-lg border bg-primary/35 shadow-sm hover:shadow-2xl w-2xs"
                >
                    <figure className="aspect-square overflow-hidden">
                        <img
                            src={placeholder}
                            alt={barber.name}
                            className="h-full w-full object-cover rounded-t-lg"
                        />
                    </figure>
                    <div className="p-4">
                        <h3 className="font-bold text-xl">{barber.name}</h3>
                        <p className="text-base">
                            ({barber.phone.slice(0, 2)}) {barber.phone.slice(2, 7)}-{barber.phone.slice(7, 11)}
                        </p>
                        <button className="btn btn-secondary mt-4 w-full" onClick={() => handleBarber(barber)}>
                            Conheça o Profissional
                        </button>

                    </div>
                </div>
            ))} */}
        </div>
    )
}