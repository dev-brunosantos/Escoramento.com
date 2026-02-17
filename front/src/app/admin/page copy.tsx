"use client"

import { Logo } from "@/src/components/Logo";
import { ClientFilter } from "./components/ClientFilter";
import { ClientTable } from "./components/ClientTable";
import { Menu } from "@/src/components/Menu/Menu";

export default function Admin() {
    return(
        // <div className="min-h-screen bg-gray-100">
        <div className="min-h-screen bg-green-700">
            <Menu />

            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="bg-white rounded-xl shadow-md p-6">

                    <ClientFilter />
                    <div className="mt-6">
                        <ClientTable />
                    </div>

                </div>
            </div>
        </div>
    )
}
