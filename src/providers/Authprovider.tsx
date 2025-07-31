import { createContext, useEffect, useState } from "react";
import type { IBarber, ILoginData, IReturnBarber, IScheduleCreate, ProviderProps, UserProviders } from "../interfaces/interfaces";
import { api } from "../service/api";
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom";


export const UserContext = createContext<UserProviders>({} as UserProviders)

export const UserProvider = ({ children }: ProviderProps) => {
    const [token, setToken] = useState<string>("")
    const [user, setUser] = useState<IReturnBarber | null>(null)
    const [allBarbers, setAllBarbers] = useState<IReturnBarber[] | null>(null)
    const [barber, setBarber] = useState<IReturnBarber[] | null>([])
    const [modal, setModal] = useState<boolean>(false)
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
        try {
            const { data } = await api.get(`/users/schedule/client/${id}`)
            console.log(data)
            return data 
        } catch (error) {
            console.log(error) 
        }
    }
    const getBarberById = async (id: number): Promise<IReturnBarber | undefined>  => {
        try {
            const { data } = await api.get(`/users/${id}`)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const login = async (payload: ILoginData) => {
        try {
            const { data } = await api.post("/login", payload)
            const decoded = jwtDecode<IBarber>(data.token)
            localStorage.setItem("@Token", data.token)
            localStorage.setItem("@UserInfo", JSON.stringify(decoded))

            setUser({ ...decoded, id: decoded.sub })
            if (decoded.role === "BARBER") {
                navigate("/barber/dashboard")
            } else {
                navigate("/user")
            }

        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        setTimeout(() => {
            localStorage.removeItem("@Token")
            localStorage.removeItem("@UserInfo")
            navigate("/")
            setUser(null)
        }, 500)
    }

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@Token")
            const user = localStorage.getItem("@UserInfo")

            try {
                if (token && user) {
                    const { data } = await api.get(`/autologin`)
                    setUser(data)
                }
            } catch (error) {
                localStorage.removeItem("@Token")
                localStorage.removeItem("@UserInfo")
            }
        }
        loadUser()
    }, [])

    return (
        <UserContext.Provider value={{ token, setToken, user, setUser, login, logout, barber, setBarber, allBarbers, setAllBarbers, getAllBarbers, modal, setModal, getBarberById, getOneBarberSchedule }}>
            {children}
        </UserContext.Provider>
    )
}