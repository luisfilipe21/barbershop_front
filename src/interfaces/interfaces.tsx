enum Roles {
    BARBER = "BARBER",
    CLIENT = "CLIENT"
}

export interface ILoginData {
    email: string
    password: string
}

export interface IBarber {
    id: number
    name: string
    email: string
    phone: string
    role: Roles
    schedule: string[]
    createdAt: string
    updatedAt: string
}

export interface IScheduleCreate {
    id: number
    date: Date
    startTime: string
    endTime: string
}

export interface ICreateBarber {
    name: string
    email: string
    phone: string
    password: string
    schedule: string[]
}

export interface ProviderProps {
    children: React.ReactNode
}

export interface UserProviders {
    token: string | undefined
    setToken: (value: string) => void
    user: IBarber | null
    setUser: (value: IBarber | null) => void
    allBarbers: IBarber[] | null
    setAllBarbers: (value: IBarber[] | null) => void
    barber: IBarber[] | null
    setBarber: (value: IBarber[] | null) => void
    login: (userData: any) => void
    logout: () => void
    getAllBarbers: () => void
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

