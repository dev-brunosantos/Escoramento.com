"use client";

import { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button
} from '@mui/material';

import { ClientDetailsModal } from './modal/ClientDetailsModal';
import { ClientFilter } from './ClientFilter';

export interface Clients {
  id: string,
  name: string;
  document: string;
  birthDate: Date;
  email: string;
  phone: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
}

interface Props {
  data: Clients[];
  fetchUsers: () => void;
}

export const ClientTable = ({ data, fetchUsers }:Props) => {

  const [openModal, setOpenModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Clients>()

  const modalEdit = (client: Clients) => {
    setSelectedClient(client);
    setOpenModal(true);
  }

  return (
    <div>
      <ClientFilter onFilterChange={fetchUsers} />

      <TableContainer component={Paper} className="shadow-lg  m-auto" sx={{ width: "100%", overflowX: 'auto'}}>
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
            {data?.length > 0 ? (
              data?.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell align="right" >
                    <Button
                      variant='contained'
                      className='bg-gray-500!'
                      onClick={() => modalEdit(user)}
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
        client={selectedClient!}
        open={openModal}
        close={() => setOpenModal(false)}
        atualizarTela={fetchUsers}
      />
    </div>
  );
};