import Image from "next/image";
import logoIcon from "../../public/icon-logo.png";

export const Logo = () => {
    return (
        <div className="flex items-center justify-center my-4">
            <Image 
                src={logoIcon}
                alt="Ícone da logomarca"
                width={50}
                height={50}
            />

            <h1 className="text-4xl text-green-700 font-bold text-center">
                ESCORAMENTO.<span className="text-gray-500">COM</span>
            </h1>
        </div>
    )
}