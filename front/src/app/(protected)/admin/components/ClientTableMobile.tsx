"use client";

import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Stack,
  Divider,
} from "@mui/material";

import { ClientDetailsModal } from "./modal/ClientDetailsModal";
import { ClientFilter } from "./ClientFilter";

export interface Clients {
  id: string;
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

export function ClientTableMobile({ data, fetchUsers }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Clients>();

  const handleOpen = (client: Clients) => {
    setSelectedClient(client);
    setOpenModal(true);
  };

  return (
    <div>
      <ClientFilter onFilterChange={fetchUsers} />

      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        px={2}
        py={1}
      >
        {data?.length > 0 ? (
          data.map((client) => (
            <Card
              key={client.id}
              elevation={3}
              sx={{
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    src={client.image}
                    alt={client.name}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box>
                    <Typography fontWeight="bold">
                      {client.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {client.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {client.phone}
                    </Typography>
                  </Box>
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleOpen(client)}
                >
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography textAlign="center" color="text.secondary">
            Nenhum cliente cadastrado.
          </Typography>
        )}
      </Box>

      <ClientDetailsModal
        client={selectedClient!}
        open={openModal}
        close={() => setOpenModal(false)}
        atualizarTela={fetchUsers}
      />
    </div>
  );
}
