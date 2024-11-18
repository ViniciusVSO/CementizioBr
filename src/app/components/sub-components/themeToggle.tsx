"use client";

import { useState, useEffect } from "react";
import { Toggle } from "@/components/ui/toggle"
import { MoonIcon, SunIcon } from "lucide-react";



export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Sincronizando o tema com o localStorage para persistência do tema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Definindo o tema inicial com base nas preferências do sistema
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", theme); // Salvando no localStorage para persistência
  }, [isDarkMode]);

  return (
    <Toggle aria-label="Toggle Theme" onClick={toggleTheme} 
      className=" bg-white dark:bg-primary text-primary dark:text-white rounded"
    >
      {isDarkMode ? <SunIcon size={24} /> : <MoonIcon size={24} />}
    </Toggle>
  );
}
