"use client";

import { useEffect, useState } from "react";
import { Modal, TextField, Avatar, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Clients } from "../ClientTable";
import { useClients } from "../../hooks/useClients";

export interface ClientModalProps {
    client: Clients;
    open: boolean;
    close: () => void
}

export const ClientEditModal = ({
    client,
    open,
    close
}: ClientModalProps) => {

    const [value, setValue] = useState(null);

    const {
        clientName, setClientName,
        clientEmail, setClientEmail,
        clientPhone, setClientPhone
    } = useClients(client)


    return (
        <Modal
            open={open}
            onClose={close}
        >
            <div className="min-h-screen w-full text-black flex items-center justify-center p-4">
                <div
                    className="w-full max-w-200 rounded-xl bg-white border border-gray-200 p-8 shadow-2xl flex flex-col gap-8"
                >
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-between relative">
                            <h2 className="h-full text-lg font-semibold text-gray-500 ">Detalhes do Cliente</h2>
                            <IconButton onClick={close} className="text-red-600! " >
                                <Close />
                            </IconButton>
                        </div>

                        <div className="w-full flex gap-5">
                            <TextField
                                label="Nome Completo"
                                variant="outlined"
                                fullWidth
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                            />

                            <TextField label="CPF / CNPJ" fullWidth variant="outlined" />
                        </div>

                        <div className="w-full flex gap-5">
                            <TextField
                                type="date"
                                fullWidth
                                variant="outlined"
                            />

                            <TextField
                                type="date"
                                fullWidth
                                variant="outlined"
                            />

                            <TextField
                                type="date"
                                fullWidth
                                variant="outlined"
                            />
                        </div>

                        <div className="w-full flex gap-5">
                            <TextField
                                variant="outlined"
                                fullWidth
                                value={clientEmail}
                                onChange={(e) => setClientEmail(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                fullWidth
                                value={clientPhone}
                                onChange={(e) => setClientPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Outros Dados (Opcional)</h3>

                    </div>
                </div>
            </div>
        </Modal>
    )
}