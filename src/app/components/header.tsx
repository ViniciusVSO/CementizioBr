"use client";

import Image from "next/image";
import CementizioLogo from "../assets/images/cementizio-logo.png";
import MenuButton from "../assets/images/menu.svg";
import Link from "next/link";
import NavItem from "./sub-components/navItem";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary flex h-20 sticky z-40  top-0 ">
      <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between px-4">
        <Link href="/">
          <Image
            src={CementizioLogo}
            width={180}
            height={60}
            alt="Cementizio Logo"
          />
        </Link>
        <div className="flex items-center gap-4 h-full tablet:hidden">
          <NavItem titulo="Sobre" href="sobre" />
          <NavItem titulo="Produtos" href="produtos" />
          <NavItem titulo="Catálogo" href="catalogo" />
          <NavItem titulo="Contato" href="contato" />
        </div>
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <Menu />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-primary shadow-md md:hidden">
          <nav className="flex flex-col items-center gap-4 p-4">
          <NavItem titulo="Sobre" href="sobre" />
          <NavItem titulo="Produtos" href="produtos" />
          <NavItem titulo="Catálogo" href="catalogo" />
          <NavItem titulo="Contato" href="contato" />
          </nav>
        </div>
      )}
    </header>
  );
}
