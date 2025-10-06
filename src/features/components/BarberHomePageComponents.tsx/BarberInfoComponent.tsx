import { useContext } from "react"
import { UserContext } from "../../../providers/Authprovider"

export const BarberInfoComponent = () => {
    const { user, setModal, setUser } = useContext(UserContext)
    
        const openModal = () => {
            setModal(true)
        }
    return (
        <section>

            <div className="space-y-8">
                            <div>
                                <div>
                                    <h1>Informações pessoais</h1>
                                </div>
                                <div>
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-full bg-muted p-2">
                                            {/* <User className="h-6 w-6" /> */}
                                            {/* IMAGEM */}
                                        </div>
                                        <div>
                                            <p className="font-medium">{user?.name}</p>
                                            <p className="text-sm text-muted-foreground">{user?.email}</p>
                                            <p className="text-sm text-muted-foreground">{user?.phone}</p>
                                            <p className="text-sm text-muted-foreground">{user?.phone}Endereço</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button className="w-full btn">
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </div>
           

        </section>
    )
}