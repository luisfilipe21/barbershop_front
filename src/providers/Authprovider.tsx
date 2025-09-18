import { createContext, useEffect, useState } from "react";
import type { IBarber, ILoginData, IReturnBarber, ProviderProps, UserProviders } from "../interfaces/interfaces";
import { api } from "../service/api";
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const UserContext = createContext<UserProviders>({} as UserProviders)

export const UserProvider = ({ children }: ProviderProps) => {
    const [token, setToken] = useState<string>("")
    const [user, setUser] = useState<IReturnBarber | null>(null)
    const [allBarbers, setAllBarbers] = useState<IReturnBarber[] | null>(null)
    const [barber, setBarber] = useState<IReturnBarber[] | null>([])
    const [modal, setModal] = useState<boolean>(false)
    const [menu, setMenu] = useState<boolean>(false)
    const navigate = useNavigate()

    const getAllBarbers = async (): Promise<IReturnBarber[] | void> => {
        try {
            const { data } = await api.get("/users")
            data.filter((barbers: IReturnBarber) => {
                if (barbers.role === "BARBER") {
                    setBarber((allBarber) => allBarber ? [...allBarber, barbers] : [barbers])
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getOneBarberSchedule = async (id: number): Promise<IReturnBarber | undefined> => {
        const token = localStorage.getItem("@Token")
        if(token){

            try {
                const { data } = await api.get(`/users/schedule/client/${id}`, { headers: { Authorization: `Bearer ${token}` } })
                return data
            } catch (error) {
                console.log(error)
            }
        }else{
            toast.error("Token nao encontrado")
        }
    }
    const getBarberById = async (id: number): Promise<IReturnBarber | undefined> => {
        try {
            const { data } = await api.get(`/users/${id}`)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    // const getAllScheduleTimesByClient = async (barberId: number) => {
        
    // }

    const login = async (payload: ILoginData) => {
        try {
            const { data } = await api.post("/login", payload)
            const decoded = jwtDecode<IBarber>(data.token)
            localStorage.setItem("@Token", data.token)
            localStorage.setItem("@UserInfo", JSON.stringify(decoded))

            setUser({ ...decoded, id: decoded.sub })
            if (decoded.role === "BARBER") {
                toast.success("Login efetuado com sucesso")
                navigate("/barber/dashboard")
            } else {
                toast.success("Login efetuado com sucesso")
                navigate("/user")
            }

        } catch (error) {
            toast.error("Email ou senha incorretos")
            console.log(error)
        }
    }

    const logout = () => {
        setTimeout(() => {
            localStorage.removeItem("@Token")
            localStorage.removeItem("@UserInfo")
            setUser(null)
            navigate("/")
        }, 500)
    }

    useEffect(() => {
        // setToken(localStorage.getItem("@Token") || "")
        
        const token = localStorage.getItem("@Token")
        const user = localStorage.getItem("@UserInfo")
        const loadUser = async () => {
            try {
                if (token && user) {
                    const { data } = await api.get(`/login/autologin`, { headers: { Authorization: `Bearer ${token}` } })
                    console.log("sucesso")
                    setUser(data)
                }
            } catch (error) {
                localStorage.removeItem("@Token")
                localStorage.removeItem("@UserInfo")
            }
        }
        loadUser()
    }, [])

    const openMenu = () => {
        setMenu(!menu)
    }

    return (
        <UserContext.Provider value={{ token, setToken, user, setUser, login, logout, barber, setBarber, allBarbers, setAllBarbers, getAllBarbers, modal, setModal, getBarberById, getOneBarberSchedule, openMenu, menu }}>
            {children}
        </UserContext.Provider>
    )
}