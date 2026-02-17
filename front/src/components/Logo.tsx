import Image from "next/image";
import logoIcon from "../../public/icon-logo.png";

export const Logo = ({ textSize }: { textSize?: string }) => {
    return (
        <div className="flex items-center justify-center my-4">
            <Image
                src={logoIcon}
                alt="Ícone da logomarca"
                width={textSize ? 35 : 50}
                height={textSize ? 35 : 50}
            />

            <h1 className={`${textSize ?? 'text-4xl'} text-green-700 font-bold text-center`}>
                ESCORAMENTO.<span className="text-gray-500">COM</span>
            </h1>
        </div>
    )
}