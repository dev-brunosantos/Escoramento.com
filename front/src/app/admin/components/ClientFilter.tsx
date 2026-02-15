import { Button, TextField } from "@mui/material"

import { Search } from "@mui/icons-material";
import { ClientCreateModal } from "./modal/ClientCreateModal";
import { useState } from "react";

export const ClientFilter = () => {

    const [openModal, setOpenModal] = useState(false);
    
        const modalCreate = () => {
            setOpenModal(true);
        }

    return (
        <>
            <div className="max-w-250 m-auto my-5 flex gap-5 items-center container">

                <TextField
                    label="Nome do cliente"
                    InputProps={{
                        endAdornment: (
                            <Search />
                        )
                    }}
                    className="w-100"
                />

                <Button
                    variant="outlined"
                    className="text-green-700! border-green-700!"
                    onClick={modalCreate}
                >
                    Novo Cadastro
                </Button>
            </div>

            <ClientCreateModal 
                open={openModal}
                close={() => setOpenModal(false)}
            />
        </>
    )
}