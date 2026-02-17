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
    const [clientRole, setClientRole] = useState("");

    useEffect(() => {
        setClientName(`${client?.name}`)
        setClientDocument(`${client?.document}`)

        setBirthDate(client?.birthDate.toString().split("T")[0]!)
        setDateCreate(client?.createdAt.toString().split("T")[0]!)
        setDateUpdate(client?.updatedAt.toString().split("T")[0]!)
        setClientEmail(`${client?.email}`)
        setClientPhone(`${client?.phone}`)
        setClientRole(`${client?.role}`)
    }, [client])

    return {
        clientName, setClientName,
        clientDocument, setClientDocument,
        birthDate, setBirthDate,
        dateCreate, setDateCreate,
        dateUpdate, setDateUpdate,
        clientEmail, setClientEmail,
        clientPhone, setClientPhone,
        clientRole, setClientRole
    }
}