import { MenuAdmin } from "./MenuAdmin";

export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="flex min-h-screen">
            <MenuAdmin />

            <main className="flex-1 w-sreen bg-gray-100 sm:pl-0 md:pl-65 ">
                {children}
            </main>
        </div>
    )
}