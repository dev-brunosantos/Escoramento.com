"use client";

import { styled } from '@mui/material/styles';
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { CloudUpload, Visibility, VisibilityOff, ArrowBack } from "@mui/icons-material";
import { useState } from 'react';
import { Logo } from '@/src/components/Logo';
import { useNewUser } from '@/src/contexts/NewUserContext';
import { useRouter } from 'next/navigation';

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

    const router = useRouter();
    const { createUser } = useNewUser();

    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState("");

    const [nome, setNome] = useState("");
    const [documento, setDocumento] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [dateType, setDateType] = useState("text");
    const [email, setEmail] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const [senha, setSenha] = useState("")

    const [telefone, setTelefone] = useState("")

    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
    };

    const handleSubmit = async () => {

        const formData = new FormData();

        formData.append("name", nome);
        formData.append("document", documento);
        formData.append("birthDate", dataNascimento);
        formData.append("email", email);
        formData.append("password", senha);
        formData.append("phone", telefone);

        if (file) {
            formData.append("image", file);
        }

        await createUser(formData as any);

        return router.push('/')
    }

    return (
        <div className="min-h-screen w-full text-black flex items-center justify-center bg-gray-100 p-4">
            <form
                className="w-full max-w-[500px] rounded-xl bg-white border border-gray-200 p-8 shadow-2xl flex flex-col gap-8"
                onSubmit={(e) => e.preventDefault()}
            >
                <Logo textSize='text-[30px]' />

                <div className="flex flex-col gap-5">
                    <Button
                        variant='outlined'
                        className='border-green-700! text-green-700! max-w-30!'
                        startIcon={<ArrowBack />}
                        onClick={() => router.back()}
                    >
                        Voltar
                    </Button>

                    <h2 className="text-lg font-semibold text-gray-500 pb-2">Cadastro do Usuário</h2>
                    <TextField
                        label="Nome Completo"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <div className='w-full flex gap-5'>
                        <TextField
                            label="CPF / CNPJ"
                            fullWidth
                            variant="outlined"
                            onChange={(e) => setDocumento(e.target.value)}
                        />

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
                        label="E-mail"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className='flex gap-2'>
                        <TextField
                            label="Senha"
                            fullWidth
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            onChange={(e) => setSenha(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            label="Telefone"
                            fullWidth
                            variant="outlined"
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </div>
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
                            {fileName ? `Selecionado: ${fileName}` : "Imagem do perfil"}
                        </span>
                        <VisuallyHiddenInput
                            type="file"
                            onChange={handleFileChange}
                        />
                    </Button>

                    <Button
                        variant="contained"
                        size="large"
                        type="button"
                        className="bg-green-700! hover:bg-green-900! py-4 font-bold"
                        onClick={async () => {
                            return await handleSubmit()
                        }}
                    >
                        Cadastrar Cliente
                    </Button>
                </div>
            </form>
        </div>
    );
}