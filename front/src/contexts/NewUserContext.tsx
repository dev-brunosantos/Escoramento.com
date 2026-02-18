"use client";

import { createContext, useContext, useState } from "react";
import { api } from "../config/axios.config";
import { toast } from "react-toastify";

interface NewUser {
    name: string;
    document: string;
    birthDate: string;
    email: string;
    password: string;
    phone?: string;
    image?: string;
}

interface UserCreate {
    user: NewUser,
    createUser: (data: FormData) => void;
}

const NewUserContext = createContext<UserCreate | null>(null)

const NewUserProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<NewUser>({
        name: "",
        document: "",
        birthDate: "",
        email: "",
        password: "",
        phone: "",
        image: ""
    });

    const createUser = async (data: FormData) => {
        try {
            const name = data.get("name");
            const email = data.get("email");
            const password = data.get("password");

            if (!name || !email || !password) {
                toast.warning("Preencha todos os campos obrigatórios!");
                return;
            }

            const response = await api.post("/users", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            toast.success("Usuário cadastrado com sucesso!");

            return response.data;

        } catch (error: any) {
            console.error(error);

            toast.error(
                error?.response?.data?.message ||
                "Erro ao cadastrar usuário"
            );
        }
    };

    return (
        <NewUserContext.Provider value={{
            user, createUser
        }}>
            {children}
        </NewUserContext.Provider>
    )
}

const useNewUser = () => {
    const context = useContext(NewUserContext);
    if (!context) throw new Error("Nenhum contexto de Criaçãod e Usuário encontrado.")
    return context
}

export { NewUserContext, NewUserProvider, useNewUser }