import { Button } from "@mui/material"
import { ExitToApp } from "@mui/icons-material";
import { Logo } from "../Logo"
import { useRouter } from "next/navigation";

export const Menu = () => {

    const router = useRouter();

    const exit = () => {
        router.replace('/login')
    }

    return(
        <header className="w-full max-w-400 m-auto h-20 px-5 flex items-center justify-between shadow-md bg-white">
            <div>
                <Logo 
                    textSize="text-[16pt]"
                />
            </div>

            <nav>
                <ul>
                    
                </ul>

                <Button 
                    variant="contained"
                    className="bg-green-700!"
                    endIcon={<ExitToApp />}
                    onClick={exit}
                >
                    Sair
                </Button>
            </nav>
        </header>
    )
}