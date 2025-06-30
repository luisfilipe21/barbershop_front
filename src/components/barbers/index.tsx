import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../providers/Authprovider"

export const Barbers = () => {
    const {barber} = useContext(UserContext)
    
    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {barber?.map((barber, index) => (
                    <div
                        key={index}
                        className="group overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow"
                    >
                        <div className="aspect-square overflow-hidden">
                            <img
                                // src={barber.image || "/placeholder.svg"}
                                alt={barber.name}
                                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold">{barber.name}</h3>
                            <p className="text-sm text-muted-foreground">{barber.phone}</p>
                            <Link to={`/barbers/${index + 1}`}>
                                <button className="btn mt-4 w-full">
                                    Ver perfil
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}