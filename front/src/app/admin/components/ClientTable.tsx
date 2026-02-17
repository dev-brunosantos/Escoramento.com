"use client";

import { useEffect, useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Button
} from '@mui/material';

import { DeleteOutline, Edit, Visibility } from "@mui/icons-material";
import { ClientDetailsModal } from './modal/ClientDetailsModal';
import { ClientCreateModal } from './modal/ClientCreateModal';
import { api } from '@/src/config/axios.config';

export interface Clients {
    id: number,
    name: string;
    document: string;
    birthDate: Date;
    email: string;
    phone: string;
    status: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    role: string;
}

// export const ClientTable = ({OpenModalCreate} : { OpenModalCreate : (data: boolean) => void}) => {
export const ClientTable = () => {

    const [openModal, setOpenModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState<Clients>()

    const modalEdit = (client: Clients) => {
        setSelectedClient(client);
        setOpenModal(true);
    }

    const [clients, setClients] = useState<Clients[]>([])

    useEffect(() => {
        async function teste() {
            const response = await api.get('/users')
            const data = response.data

            setClients(data)
        }

        teste()
    }, [])

    return (
        <>
            {/* <TableContainer component={Paper} className="shadow-lg max-w-250 m-auto"> */}
            <TableContainer component={Paper} className="shadow-lg  m-auto">
                <Table sx={{ minWidth: 650 }}>
                    <TableHead className="bg-gray-50">
                        <TableRow>
                            <TableCell className="font-bold">Nome</TableCell>
                            <TableCell className="font-bold">E-mail</TableCell>
                            <TableCell className="font-bold">Telefone</TableCell>
                            <TableCell className="font-bold" align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clients.length > 0 ? (
                            clients.map((client) => (
                                <TableRow key={client.id} hover>
                                    <TableCell>{client.name}</TableCell>
                                    <TableCell>{client.email}</TableCell>
                                    <TableCell>{client.phone}</TableCell>
                                    <TableCell align="left" >
                                        <Button
                                            variant='contained'
                                            className='bg-gray-500!'
                                            onClick={() => modalEdit(client)}
                                        >
                                            Detalhes
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} align="center">
                                    Nenhum cliente cadastrado.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <ClientDetailsModal
                client={selectedClient}
                open={openModal}
                close={() => setOpenModal(false)}
            />

            {/* <ClientCreateModal 
                open={}
                close={}
            /> */}
        </>
    );
};