"use client";

import { useEffect, useState } from "react";
import { Modal, TextField, Avatar, IconButton, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Clients } from "../ClientTable";

import { styled } from '@mui/material/styles';
import { CloudUpload } from "@mui/icons-material";
import { Logo } from '@/src/components/Logo';

// O VisuallyHiddenInput deve ficar fora do componente principal
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

interface ClientModalProps {
    open: boolean;
    close: () => void
}

export const ClientCreateModal = ({
    open,
    close
}: ClientModalProps) => {

    const [dataNascimento, setDataNascimento] = useState("");
    const [dateType, setDateType] = useState("text");

    const [fileName, setFileName] = useState("");

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) setFileName(file.name);
    };

    return (
        <Modal
            open={open}
            onClose={close}
        >
            <div className="min-h-screen w-full m-auto text-black flex items-center justify-center p-4">
                <div
                    className="w-full max-w-200 rounded-xl bg-white border border-gray-200 p-8 shadow-2xl flex flex-col gap-8"
                >
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-between relative">
                            <h2 className="h-full text-lg font-semibold text-gray-500 ">Novo Cliente</h2>

                            <IconButton onClick={close} className="text-red-600! " >
                                <Close />
                            </IconButton>
                        </div>

                        <TextField
                            label="Nome Completo"
                            variant="outlined"
                            fullWidth
                        />

                        <div className="w-full flex gap-5">
                            <TextField label="CPF / CNPJ" fullWidth variant="outlined" />

                            <TextField
                                label="Data de Nascimento"
                                type={dateType}
                                value={dataNascimento}
                                onChange={(e) => setDataNascimento(e.target.value)}
                                onFocus={() => setDateType("date")}
                                onBlur={() => {
                                    if (!dataNascimento) setDateType("text");
                                }}
                                InputLabelProps={{
                                    shrink: dateType === "date" || !!dataNascimento,
                                }}
                                fullWidth
                            />
                        </div>

                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                        />

                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Outros Dados (Opcional)</h3>

                        <Button
                            variant="outlined"
                            component="label"
                            className="w-full h-24 flex flex-col items-center justify-center gap-2 border-dashed border-2 border-green-700! normal-case"
                        >
                            <CloudUpload sx={{ fontSize: 40, color: '#00a63e' }} />
                            <span className="text-sm text-gray-600">
                                {fileName ? `Selecionado: ${fileName}` : "Anexar Documento ou Imagem"}
                            </span>
                            <VisuallyHiddenInput
                                type="file"
                                onChange={handleFileChange}
                            />
                        </Button>

                        <Button
                            variant="contained"
                            size="large"
                            type="submit"
                            className="bg-green-700! hover:bg-green-900! py-4 font-bold!"
                        >
                            Cadastrar Cliente
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}