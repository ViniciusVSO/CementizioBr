"use client";

import Image from "next/image";
import CementizioLogoDark from "../assets/images/cementizio-logo.png";
import CementizioLogoLight from "../assets/images/cementizio-logo-alternativa.png";
import Link from "next/link";
import NavItem from "./sub-components/navItem";
import { Menu } from "lucide-react";
import ThemeToggle from "./sub-components/themeToggle";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white flex h-20 sticky z-40  top-0 shadow-xl dark:bg-primary">
      <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between px-4">
        <Link href="/">
          <Image
            className=" block dark:hidden"
            src={CementizioLogoLight}
            width={180}
            height={60}
            alt="Cementizio Logo"
          />
          <Image
            className=" hidden dark:block"
            src={CementizioLogoDark}
            width={180}
            height={60}
            alt="Cementizio Logo"
          />
        </Link>
        <div className="h-full flex items-center gap-4">
          <ThemeToggle />
          <div className="flex items-center h-full tablet:hidden">
            <NavItem titulo="Sobre" href="sobre" />
            <NavItem titulo="Produtos" href="produtos" />
            <NavItem titulo="Catálogo" href="catalogo" />
            <NavItem titulo="Contato" href="contato" />
          </div>
          <button
            className="md:hidden text-primary dark:text-white"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <Menu size={36} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white dark:bg-primary dark:bg-opacity-70 backdrop-blur-xl bg-opacity-70 shadow-xl md:hidden ">
          <nav className="flex flex-col items-center gap-8 p-4">
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
