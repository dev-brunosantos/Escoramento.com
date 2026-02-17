"use client";

import { useEffect, useState } from "react";
import {
    Button,
    TextField,
    InputAdornment,
    IconButton
} from "@mui/material";
import {
    Visibility,
    VisibilityOff
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { Logo } from "@/src/components/Logo";
import { useLogin } from "@/src/contexts/LoginContext";

export default function Login() {

    const { login } = useLogin();
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e: React.FormEvent) => {
        try {
            e.preventDefault();

            setLoading(true);

            const success = await login({ email, password });

            return success
        } catch (error) {
            console.error(error)
            return alert(error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        const userJson = localStorage.getItem("user");

        if (userJson) {
            const user = JSON.parse(userJson);

            if (user.role === "ADMIN") {
                router.push("/admin");
            } else if (user.role === "CLIENT") {
                router.push("/client");
            }
        }
    }, [router]);

    return (
        <div className="min-h-screen w-full text-black flex items-center justify-center bg-gray-100 p-4">
            <form
                onSubmit={handleLogin}
                className="w-full max-w-125 rounded-xl bg-white border border-gray-200 p-8 shadow-2xl flex flex-col gap-8"
            >
                <Logo textSize="text-[30px]" />

                <div className="flex flex-col gap-5">
                    <h2 className="text-lg font-semibold text-gray-500 pb-2 text-center">
                        Área Administrativa
                    </h2>

                    <TextField
                        label="E-mail"
                        fullWidth
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        label="Senha"
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickShowPassword}>
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
                        disabled={loading}
                        className="bg-green-700! hover:bg-green-900! py-4 font-bold"
                        onClick={handleLogin}
                    >
                        {loading ? "Entrando..." : "Login"}
                    </Button>

                    <Button
                        variant="outlined"
                        type="button"
                        className="text-green-700! border-green-700!"
                        onClick={() => router.push("/users")}
                    >
                        Cadastre-se
                    </Button>
                </div>
            </form>
        </div>
    );
}
