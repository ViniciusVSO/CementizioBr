"use client";

import { useRouter } from "next/navigation";
import InputGroup from "./inputGroup";
import SelectGroup from "./selectGroup";
import { useState, useTransition } from "react";

export default function Form() {

  return (
        <form
          
          className="flex w-full flex-col gap-4 h-full"
        >
          <div className="flex justify-between gap-10 h-full  tablet:flex-col">
            <div className="flex flex-col w-full gap-2">
              <InputGroup
                type="text"
                label="Nome Completo"
                placeholder="Digite seu nome completo"
                id="nome" 
              />
              <InputGroup
                type="email"
                label="Email"
                placeholder="exemplo@email.com"
                id="email" 
              />
              <InputGroup
                type="text"
                label="Telefone"
                placeholder="(00) 0000-0000"
                id="tel" 
              />
              <InputGroup
                type="text"
                label="CEP"
                placeholder="00000-000"
                id="cep"
              />
              <InputGroup
                type="text"
                label="Logradouro"
                placeholder="Digite o logradouro completo da sua residência"
                id="logradouro"
                
              />
              <InputGroup
                type="text"
                label="Número da Residência"
                placeholder="Digite o número da residência"
                id="number_resid" 
              />
              <SelectGroup id="register"  />
            </div>
            <div className="flex flex-col w-1/2 justify-between  tablet:w-full">
              <div className="flex flex-col items-center gap-6 tablet:hidden">
                <img
                  src="/catalogoBanner.png"
                  alt="Cementizio Catálogo Banner"
                />
                <h2 className="text-2xl text-primary dark:text-white font-primary text-center">
                  CATÁLOGO DE PISOS & REVESTIMENTOS
                </h2>
              </div>
              <button
                type="submit"
                className="bg-primary text-white font-medium dark:bg-white dark:text-primary font-primary p-3"
              >
                Concluir
              </button>
            </div>
          </div>
        </form>
  );
}
