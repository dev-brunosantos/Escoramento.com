"use client"

import { createContext, useContext, useState } from "react"
import { api } from "../config/axios.config";
import { useRouter } from "next/navigation";

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
}

interface LoginProps {
    user?: IUser;
    login: ({ email, password }: UseLogin) => void;
    logout: () => void;
}

const LoginContext = createContext<LoginProps | null>(null);

const LoginProvider = ({ children }: { children: React.ReactNode }) => {

    const router = useRouter();
    const [user, setUser] = useState<IUser>();

    const login = async ({ email, password }: UseLogin) => {
        if (!email || !password) {
            return alert("Todos os campos devem ser preenchidos!")
        }

        const request = await api.post('/login', { email, password }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log(request)

        if (!request.data) {
            return alert("Usuário não encontrado.")
        }
        else {
            setUser(request.data.user)

            localStorage.setItem("user", JSON.stringify(request.data.user))
            localStorage.setItem("token", JSON.stringify(request.data.token))

            if (request.data.user.role == "ADMIN") {
                return router.push('/admin')
            }
            return router.push('/client')
        }
    }

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        return router.replace('/login')
    }

    return (
        <LoginContext.Provider value={{ user, login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}

const useLogin = () => {
    const context = useContext(LoginContext)
    if (!context) throw new Error("Nenhum contexto de LOGIN encontrado.")
    return context
}

export { LoginContext, LoginProvider, useLogin }