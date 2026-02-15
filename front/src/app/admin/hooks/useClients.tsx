import { useEffect, useState } from "react";
import { Clients } from "../components/ClientTable";

export function useClients(client: Clients) {

    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientPhone, setClientPhone] = useState("");

    useEffect(() => {
        setClientName(`${client?.name}`)
        setClientEmail(`${client?.email}`)
        setClientPhone(`${client?.phone}`)
    }, [client])

    return {
        clientName,
        setClientName,
        clientEmail,
        setClientEmail,
        clientPhone, setClientPhone
    }
}