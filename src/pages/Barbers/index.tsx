import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { UserContext } from "../../providers/Authprovider"
import { useContext } from "react"


export const Barber = () => {
    // Precisa receber o id do barbeiro selecionado

    const { barber } = useContext(UserContext)


    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Header />

                <main className="flex-1 py-10 m-auto">
                    <div className="container">
                        <div className="mb-8 flex items-center">
                            <Link to="/">
                                <button className="gap-1 btn-primary">
                                    {/* <ChevronLeft className="h-4 w-4" /> */}
                                    Voltar
                                </button>
                            </Link>
                        </div>
                        {barber?.map((barber) => (
                            
                        <div key={barber.id} className="grid gap-8 md:grid-cols-[1fr_2fr]">
                            <div>
                                <div>
                                    <div className="aspect-square overflow-hidden">
                                        {/* <img
                    src={barber.image || null}
                    alt={barber.name}
                    className="h-full w-full object-cover"
                  /> */}
                                    </div>
                                    <div className="p-6">
                                        <h1 className="text-2xl font-bold">
                                            {barber?.name}
                                        </h1>
                                        {/* <p className="text-muted-foreground">
                                            especialidade
                                            {barber.specialty}
                                        </p> */}

                                        {/* <div className="mt-4 flex items-center">
                                            <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                                            <span className="font-medium">
                                                nota
                                                {barber.rating}
                                            </span>
                                            <span className="text-muted-foreground">/5.0</span>
                                        </div> */}

                                        <div className="mt-6 space-y-3">
                                            {/* <div className="flex items-start gap-2">
                                                <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
                                                <div>
                                                    <p className="font-medium">Experience</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        experiência {barber.experience}
                                                    </p>
                                                </div>
                                            </div> */}
                                            {/* <div className="flex items-start gap-2">
                                                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                                                <div>
                                                    <p className="font-medium">Location</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        local
                                                        {barber.location}
                                                    </p>
                                                </div>
                                            </div> */}
                                            <div className="flex items-start gap-2">
                                                {/* <Phone className="mt-0.5 h-4 w-4 text-muted-foreground" /> */}
                                                <div>
                                                    <p className="font-medium">Contact</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {barber.phone}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <h2 className="font-medium">Sobre</h2>
                                            <p className="mt-2 text-sm text-muted-foreground">Sobre
                                                {/* {barbersData.bio} */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold">Book an Appointment</h2>
                                        <p className="text-muted-foreground">Select a date and time for your appointment</p>

                                        {/* <div defaultValue={dates[0].display} className="mt-6">
                                            <div className="grid w-full grid-cols-7">
                                                {dates.map((date) => (
                                                    <div
                                                        key={date.display}
                                                        value={date.display}
                                                        onClick={() => setSelectedDate(date)}
                                                        className="flex flex-col"
                                                    >
                                                        <span className="text-xs font-normal">{date.dayName}</span>
                                                        <span>{date.monthDay}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {dates.map((date) => (
                                                <div key={date.display} value={date.display} className="mt-6">
                                                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                                                        {availableTimeSlots.map((time) => (
                                                            <button
                                                                key={time}
                                                                className="w-full"
                                                                onClick={() => setSelectedTime(time)}
                                                            >
                                                                {time}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    {availableTimeSlots.length === 0 && (
                                                        <p className="py-8 text-center text-muted-foreground">No available slots for this day.</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div> */}

                                        <div className="mt-8">
                                            <h3 className="font-medium">Appointment Summary</h3>
                                            <div className="mt-2 rounded-lg border p-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <p className="text-sm font-medium">Barberiro</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            {barber.name}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">Serviços</p>
                                                        <p className="text-sm text-muted-foreground">Cabelo e Barba</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">Data</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            selecionar data{/* {selectedDate.display} */}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">Horário</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            escolha um horário{/* {selectedTime || "Select a time"} */}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="mt-6 w-full btn"
                                        >
                                            botão
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
))}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}