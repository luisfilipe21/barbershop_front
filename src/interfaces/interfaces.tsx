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
    Schedule: IScheduleCreate[]
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
    role?: Roles
    password: string
    Schedule: IScheduleCreate[]
}
export interface IReturnBarber {
    id: number
    name: string
    email: string
    role: Roles
    phone: string
    Schedule: IScheduleCreate[]
}

export interface ProviderProps {
    children: React.ReactNode
}

export interface UserProviders {
    token: string | undefined
    setToken: React.Dispatch<React.SetStateAction<string>>
    user: IReturnBarber | null
    setUser: (value: IReturnBarber | null) => void
    allBarbers: IReturnBarber[] | null
    setAllBarbers: (value: IReturnBarber[] | null) => void
    barber: IReturnBarber[] | null
    setBarber: (value: IReturnBarber[] | null) => void
    login: (userData: any) => void
    logout: () => void
    getAllBarbers: () => void
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    getBarberById: (id: number) => Promise<IReturnBarber | undefined>
    getOneBarberSchedule: (id: number) => Promise<IReturnBarber | undefined>
    openMenu: () => void
    menu: boolean
    calRef:React.RefObject<any>
}

