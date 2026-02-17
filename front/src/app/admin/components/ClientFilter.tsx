"use client"

import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material"

import { Search } from "@mui/icons-material";
import { ClientCreateModal } from "./modal/ClientCreateModal";
import { useEffect, useState } from "react";

export const ClientFilter = ({ onFilterChange }: { onFilterChange: any }) => {

    const [openModal, setOpenModal] = useState(false);

    const [userName, setUserName] = useState("");
    const [userRole, setUserRole] = useState("Todos");

    const modalCreate = () => {
        setOpenModal(true);
    }

    const searchInfor = () => {
        let payload = { nome: userName, cargo: userRole }

        alert(JSON.stringify(payload))
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            onFilterChange({ userName, userRole });
        }, 500); // 500ms de espera

        return () => clearTimeout(handler);
    }, [userName, userRole, onFilterChange]);

    return (
        <>
            {/* <div className="max-w-250 m-auto my-5 flex gap-5 items-center container"> */}
            <div className="w-full m-auto my-5 flex justify-between gap-5 items-center">

                {/* <h2 className="max-w-250 my-5 mx-auto text-4xl text-gray-500 font-bold"> */}
                <div className="flex flex-col">
                    <h2 className="max-w-250 mx-4 text-4xl text-gray-500 font-bold">
                        Usuários
                    </h2>
                    <Button
                        variant="outlined"
                        className="text-green-700! border-green-700!"
                        onClick={modalCreate}
                    >
                        Novo Cadastro
                    </Button>
                </div>

                <div className="px-5 py-2 flex items-center gap-5">
                    <TextField
                        label="Nome do cliente"
                        InputProps={{
                            endAdornment: (
                                <Search />
                            )
                        }}
                        className="w-100"
                        onChange={(e) => setUserName(e.target.value)}
                    />

                    <FormControl className="w-50!">
                        <InputLabel id="demo-simple-select-label">Cargos</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Cargos"
                            value={userRole}
                            onChange={(e: any) => setUserRole(e.target.value)}
                        >
                            <MenuItem value="Todos">Todos</MenuItem>
                            <MenuItem value="ADMIN">Administradores</MenuItem>
                            <MenuItem value="CLIENT">Clientes</MenuItem>
                        </Select>
                    </FormControl>

                    <Button
                        variant="outlined"
                        className="text-green-700! border-green-700!"
                        onClick={searchInfor}
                    >
                        Buscar
                    </Button>
                </div>
            </div>

            <ClientCreateModal
                open={openModal}
                close={() => setOpenModal(false)}
            />
        </>
    )
}