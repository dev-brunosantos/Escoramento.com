import Link from "next/link"

interface LinkProps {
    title: string;
    link: string;
}

export const Links = ({ title, link }: LinkProps) => {
    return(
        <Link href={link}>{title}</Link>
    )
}