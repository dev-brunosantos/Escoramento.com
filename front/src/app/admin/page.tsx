"use client"

import { Logo } from "@/src/components/Logo";
import { ClientFilter } from "./components/ClientFilter";
import { ClientTable } from "./components/ClientTable";

export default function Admin() {
    return(
        <div className="w-full h-screen m-auto">
            
            <Logo />

            <h2 className="text-lg font-semibold text-gray-500 pb-2 text-center">Painel Administrativo</h2>

            <ClientFilter />

            <ClientTable />
        </div>
    )
}