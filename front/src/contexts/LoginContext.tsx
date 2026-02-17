"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../config/axios.config";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

interface UseLogin {
    email: string;
    password: string;
}

interface IUser {
    name: string;
    document: string;
    birthDate: Date;
    email: string;
    password: string;
    phone?: string;
    image?: string;
    s3Key?: string;
    role: string;
}

interface LoginProps {
    user?: IUser;
    loading: boolean;
    login: ({ email, password }: UseLogin) => void;
    logout: () => void;
}

const LoginContext = createContext<LoginProps | null>(null);

const LoginProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [user, setUser] = useState<IUser | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Erro ao carregar dados do usuário", error);
            }
        }
        setLoading(false);
    }, []);

    const login = async ({ email, password }: UseLogin) => {
        if (!email || !password) {
            return alert("Todos os campos devem ser preenchidos!")
        }

        try {
            const request = await api.post('/login', { email, password });

            if (!request.data || !request.data.user) {
                return alert("Usuário não encontrado.");
            }

            const userData = request.data.user;
            const token = request.data.token;

            setUser(userData);

            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("token", JSON.stringify(token));
            Cookies.set('token', token, { expires: 7 });

            if (userData.role === "ADMIN") {
                router.push('/admin');
            } else {
                router.push('/client');
            }
        } catch (error) {
            alert("Erro ao realizar login. Verifique suas credenciais.");
        }
    }

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(undefined);
        Cookies.remove('token');
        router.replace('/login');
    }

    return (
        <LoginContext.Provider value={{ user, loading, login, logout }}>
            {!loading && children}
        </LoginContext.Provider>
    )
}

const useLogin = () => {
    const context = useContext(LoginContext)
    if (!context) throw new Error("Nenhum contexto de LOGIN encontrado.")
    return context
}

export { LoginContext, LoginProvider, useLogin }