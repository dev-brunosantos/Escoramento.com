"use client";

import { useState } from 'react';
import {
    Button,
    TextField,
    InputAdornment,
    IconButton
} from "@mui/material";
import {
    PasswordOutlined,
    Visibility,
    VisibilityOff
} from "@mui/icons-material";
import { useRouter } from 'next/navigation';
import { Logo } from '@/src/components/Logo';

export default function Login() {
    // 1. Estado booleano para controlar a visibilidade
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const router = useRouter();

    return (
        <div className="min-h-screen w-full text-black flex items-center justify-center bg-gray-100 p-4">
            <form className="w-full max-w-[500px] rounded-xl bg-white border border-gray-200 p-8 shadow-2xl flex flex-col gap-8">
                
                <Logo />

                <div className="flex flex-col gap-5">
                    <h2 className="text-lg font-semibold text-gray-500 pb-2 text-center">Área Administrativa</h2>

                    <TextField
                        label="E-mail"
                        fullWidth
                        variant="outlined"
                        type="email"
                        className='border-green-700! outline-green-700!'
                    />

                    <TextField
                        label="Senha"
                        fullWidth
                        variant="outlined"
                        // 2. Muda o tipo conforme o estado
                        type={showPassword ? "text" : "password"}
                        // 3. Forma correta de adicionar ícones no MUI
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
                </div>

                <div className="flex flex-col gap-4">
                    <Button
                        variant="contained"
                        size="large"
                        type="submit"
                        className="bg-green-700! hover:bg-green-900! py-4 font-bold flex gap-2"
                        onClick={(e) => {
                            e.preventDefault();
                            router.push('/users');
                        }}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </div>
    );
}