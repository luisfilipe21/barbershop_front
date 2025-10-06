import "cally";
import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../../providers/Authprovider"

export const BarberAgendaComponent = () => {
    const { setModal, calRef } = useContext(UserContext);

    
    const [dataSelecionada, setDataSelecionada] = useState<string>("");
    const [titulo, setTitulo] = useState("");
    const [eventos, setEventos] = useState<Record<string, Event>>({});


    const isoToBr = (iso?: string) => {
        if (!iso) return "";
        const [y, m, d] = iso.split("-");
        return `${d}/${m}/${y}`;
    };

    const dateToIsoLocal = (date: Date) => {
        // Gera YYYY-MM-DD usando valores locais (sem usar toISOString)
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        return `${y}-${m}-${d}`;
    };

    useEffect(() => {
        const cal = calRef.current;
        if (!cal) return;

        cal.getDayParts = (date: Date) => {
            const isoLocal = dateToIsoLocal(date);
            return eventos[isoLocal] ? "has-event" : "";
        };
        

        cal.value = cal.value;
    }, [eventos]);

    useEffect(() => {
        const cal = calRef.current;
        if (!cal) return;

        const handleChange = (e: Event) => {
            const target = e.target as HTMLInputElement;
            setDataSelecionada(target.value);
            setTitulo(eventos[target.value]?.titulo || "");
        };

        cal.addEventListener("change", handleChange);
        return () => cal.removeEventListener("change", handleChange);
    }, [eventos]);


    const salvar = () => {
        if (!dataSelecionada || !titulo.trim()) return alert("Preencha todos os campos");
        setEventos((prev)=> ({ ...prev, [dataSelecionada]: { titulo } }));
        setTitulo("");
    };

    const excluir = () => {
        if (!dataSelecionada) return;
        setEventos(prev => {
            const novo = { ...prev };
            delete novo[dataSelecionada];
            return novo;
        });
        setTitulo("");
    };

    const openModal = () => {
        setModal(true)
    }

  
    return (
        <section className="">

            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-4xl font-bold">Agenda</h1>
                    <p className="text-muted-foreground">Controle seus agendamentos</p>
                </div>

                <button className="mt-4 sm:mt-0 btn" onClick={openModal}>Gerenciar horários</button>

            </div>
            <div>
                <calendar-date ref={calRef} class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
                    <svg
                        aria-label="Previous"
                        className="fill-current size-4"
                        slot="previous"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                    </svg>
                    <svg
                        aria-label="Next"
                        className="fill-current size-4"
                        slot="next"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                    </svg>
                    <calendar-month ></calendar-month>
                </calendar-date>
            </div>

            {dataSelecionada && (
                <div className="mt-4 border p-3 rounded">
                    <h3 className="font-semibold mb-2">
                        Evento em {isoToBr(dataSelecionada)}
                    </h3>
                    <input
                        type="text"
                        placeholder="Título do evento"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        className="border rounded p-2 w-full mb-2"
                    />
                    {/* save delete */}
                    <div className="flex gap-2">
                        <button
                            onClick={salvar}
                            className="bg-green-500 text-white px-3 py-1 rounded"
                        >
                            Salvar
                        </button>
                        <button
                            onClick={excluir}
                            className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                            Excluir
                        </button>
                    </div>
                </div>
            )}

            <div className="mt-4">
                <h3 className="font-semibold mb-2">Eventos cadastrados:</h3>
                {Object.keys(eventos).length === 0 ? (
                    <p className="text-gray-500 text-sm">Nenhum evento ainda</p>
                ) : (
                    <ul className="list-disc pl-5 text-sm">
                        {Object.entries(eventos).map(([data, ev]) => (
                            <li key={data}>
                                <span className="font-semibold">{data}</span>: {ev.titulo}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )
}