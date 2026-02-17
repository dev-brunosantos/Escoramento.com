"use client";

import { createContext, useContext, useState } from "react";
import { api } from "../config/axios.config";

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
    createUser: (data: NewUser) => void;
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

    const createUser = async (data: NewUser) => {
        if(!data) {
            return alert("Os campos devem ser preenchidos!")
        }
        else {
            setUser(data)
            const response = await api.post('/users', data)
            return alert(response.data)
        }        
    }

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