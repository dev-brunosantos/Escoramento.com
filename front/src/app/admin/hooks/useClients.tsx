"use client"

import { useEffect, useState } from "react";
import { Clients } from "../components/ClientTable";

export function useClients(client?: Clients) {

    const [clientName, setClientName] = useState("");
    const [clientDocument, setClientDocument] = useState("");
    
    const [birthDate, setBirthDate] = useState("");
    const [dateCreate, setDateCreate] = useState("");
    const [dateUpdate, setDateUpdate] = useState("");

    const [clientEmail, setClientEmail] = useState("");
    const [clientPhone, setClientPhone] = useState("");

    useEffect(() => {
        setClientName(`${client?.name}`)
        setClientDocument(`${client?.document}`)

        setBirthDate(client?.birthDate.toString().split("T")[0]!)
        setDateCreate(client?.createdAt.toString().split("T")[0]!)
        setDateUpdate(client?.updatedAt.toString().split("T")[0]!)

        setClientEmail(`${client?.email}`)
        setClientPhone(`${client?.phone}`)
    }, [client])

    return {
        clientName,
        clientDocument,
        setClientDocument,

        birthDate, 
        setBirthDate,

        dateCreate,
        setDateCreate,

        dateUpdate,
        setDateUpdate,

        setClientName,
        clientEmail,
        setClientEmail,
        clientPhone, setClientPhone
    }
}