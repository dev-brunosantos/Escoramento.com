"use client";

import { useEffect, useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, CircularProgress, Box,
    Button, IconButton
} from '@mui/material';

import { DeleteOutline, Edit, Visibility } from "@mui/icons-material";
import { ClientEditModal } from './modal/ClientEditModal';
import { ClientCreateModal } from './modal/ClientCreateModal';

export interface Clients {
    id: number,
    name: string;
    email: string;
    phone: string;
    status: string;
    document: string;
}

export const ClientTable = ({OpenModalCreate} : { OpenModalCreate : (data: boolean) => void}) => {

    const [openModal, setOpenModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState<Clients>()

    const modalEdit = (client: Clients) => {
        setSelectedClient(client);
        setOpenModal(true);
    }

    const MOCK_CLIENTS: Clients[] = [
        {
            id: 1,
            name: "João Silva Sauro",
            email: "joao.silva@email.com",
            phone: "(11) 98888-7777",
            status: "Ativo",
            document: "123.456.789-00"
        },
        {
            id: 2,
            name: "Maria Oliveira Santos",
            email: "maria.oliveira@empresa.com.br",
            phone: "(21) 97777-6666",
            status: "Pendente",
            document: "987.654.321-11"
        },
        {
            id: 3,
            name: "Carlos Eduardo de Souza",
            email: "cadu.souza@gmail.com",
            phone: "(31) 96666-5555",
            status: "Inativo",
            document: "456.123.789-22"
        },
        {
            id: 4,
            name: "Ana Beatriz Ferreira",
            email: "ana.bea@outlook.com",
            phone: "(41) 95555-4444",
            status: "Ativo",
            document: "321.654.987-33"
        },
        {
            id: 5,
            name: "Roberto Carlos Braga",
            email: "rei@musica.com.br",
            phone: "(11) 94444-3333",
            status: "Ativo",
            document: "111.222.333-44"
        }
    ];

    return (
        <>
            <TableContainer component={Paper} className="shadow-lg max-w-250 m-auto">
                <Table sx={{ minWidth: 650 }}>
                    <TableHead className="bg-gray-50">
                        <TableRow>
                            <TableCell className="font-bold">Nome</TableCell>
                            <TableCell className="font-bold">E-mail</TableCell>
                            <TableCell className="font-bold">Telefone</TableCell>
                            <TableCell className="font-bold" align="left">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {MOCK_CLIENTS.length > 0 ? (
                            MOCK_CLIENTS.map((client) => (
                                <TableRow key={client.id} hover>
                                    <TableCell>{client.name}</TableCell>
                                    <TableCell>{client.email}</TableCell>
                                    <TableCell>{client.phone}</TableCell>
                                    <TableCell align="left" >
                                        <Button
                                            variant='contained'
                                            className='bg-green-700!'
                                            startIcon={<Edit />}
                                            onClick={() => modalEdit(client)}
                                        >
                                            Editar
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

            <ClientEditModal
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