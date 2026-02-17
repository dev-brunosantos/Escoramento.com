"use client"

import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"

import { Search } from "@mui/icons-material";
import { useState } from "react";

export const ClientFilter = ({ onFilterChange }: { onFilterChange: any }) => {

    const [userName, setUserName] = useState("");
    const [userRole, setUserRole] = useState("Todos");

    return (
        <div className="w-full m-auto my-5 flex justify-between gap-5 items-center">

            <div className="sm:flex-col md:flex-row px-5 py-2 flex flex-wrap items-center gap-5">
                <TextField
                    label="Nome do cliente"
                    fullWidth
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
                    onClick={() => {
                        onFilterChange({ userName, userRole })
                    }}
                >
                    Buscar
                </Button>
            </div>
        </div>
    )
}