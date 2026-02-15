"use client"; // 1. Adicione isso!

import { styled } from '@mui/material/styles';
import { Button, TextField } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { useState } from 'react';
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

export default function Users() {
    // 2. Dica: Use estados para lidar com o arquivo no Next.js
    const [fileName, setFileName] = useState("");

    const [dataNascimento, setDataNascimento] = useState("");
    const [dateType, setDateType] = useState("text");

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) setFileName(file.name);
    };

    return (
        <div className="min-h-screen w-full text-black flex items-center justify-center bg-gray-100 p-4">
            <form
                className="w-full max-w-[500px] rounded-xl bg-white border border-gray-200 p-8 shadow-2xl flex flex-col gap-8"
            >
                <Logo />

                <div className="flex flex-col gap-5">
                    <h2 className="text-lg font-semibold text-gray-500 pb-2">Área do Cliente</h2>
                    <TextField label="Nome Completo" fullWidth variant="outlined" />

                    <div className='w-full flex gap-5'>
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

                    <TextField label="E-mail" fullWidth variant="outlined" />
                    <TextField label="Telefone" fullWidth variant="outlined" />
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
                        className="bg-green-700! hover:bg-green-900! py-4 font-bold"
                    >
                        Cadastrar Cliente
                    </Button>
                </div>
            </form>
        </div>
    );
}