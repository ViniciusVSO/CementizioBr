
import Link from "next/link";

type NavItemProps = {
    titulo: string,
    href: string
}

export default function NavItem({titulo, href}: NavItemProps){
    return(
        <Link href={`#${href}`} className="font-primary text-white">
            {titulo}
        </Link>
    );
}