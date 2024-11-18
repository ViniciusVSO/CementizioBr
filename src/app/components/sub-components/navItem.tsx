
import Link from "next/link";

type NavItemProps = {
    titulo: string,
    href: string
}

export default function NavItem({titulo, href}: NavItemProps){
    return(
        <Link href={`#${href}`} className="dark:text-white scroll-smooth h-full flex items-center px-4 font-medium  border-b-transparent border-b-2  justify-center font-primary text-primary dark:hover:bg-white dark:hover:border-b-2 hover:bg-primary hover:border-b-2 dark:hover:backdrop-blur-xl hover:backdrop-blur-xl dark:hover:bg-opacity-15 hover:bg-opacity-15 dark:hover:border-b-white hover:border-b-primary">
            {titulo}
        </Link>
    );
}