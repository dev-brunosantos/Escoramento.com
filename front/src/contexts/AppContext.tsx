"use client";

import { LoginProvider } from "./LoginContext"
import { NewUserProvider } from "./NewUserContext"

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <NewUserProvider>
            <LoginProvider>
                {children}
            </LoginProvider>
        </NewUserProvider>
    )
}