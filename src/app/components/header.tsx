import Image from "next/image";
import CementizioLogo from "../assets/images/cementizio-logo.png";
import MenuButton from "../assets/images/menu.svg"
import Link from "next/link";
import NavItem from "./sub-components/navItem";

export default function Header(){
    return(
        <header className="bg-primary flex h-20 sticky z-40  top-0 ">
            <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between px-4">
                <Link href="/">
                    <Image src={CementizioLogo} width={180} height={60} alt="Cementizio Logo" />
                </Link>
                <div className="flex items-center gap-4">
                    <NavItem titulo="Sobre" href="sobre" />
                    <NavItem titulo="Produtos" href="produto" />
                    <NavItem titulo="Catálogo" href="catalogo" />
                    <NavItem titulo="Contato" href="contato" />
                </div>
            </div>
        </header>
    );
}