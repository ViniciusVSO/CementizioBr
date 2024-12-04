"use client";

import InputGroup from "./inputGroup";
import SelectGroup from "./selectGroup";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const formDataSchema = z.object({
  nome: z.string().min(3, 'O nome precisa ter ao menos 3 caracteres'),
  email: z.string().email('Digite um email válido'),
  telefone: z.string().min(10, 'O telefone deve ter ao menos 10 números').max(11, 'O telefone deve ter no máximo 11 números'),
  cep: z.string().min(8, "O CEP deve conter 8 caracteres")
  .max(9, "O CEP deve conter no máximo 9 caracteres"),
  endereco: z.string(),
  numero: z.string().min(1, 'O número de endereço deve conter ao menos 1 caracteres').max(5, 'O limite é 5 caracteres'),
  interesse: z.string().refine(value => value !== '0', {
    message: 'Por favor, selecione o por que quer conhecer o catálogo!.',
  })
})

type FormDataSchema = z.infer<typeof formDataSchema>

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  
  const day = String(date.getDate()).padStart(2, '0'); 
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0'); 
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes} ${day}/${month}/${year}`;
};

export default function Form() {
  const { register, handleSubmit, setError, formState } = useForm<FormDataSchema>({
    resolver: zodResolver(formDataSchema),
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormDataSchema) => {
    setIsLoading(true); 
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Formulário enviado com sucesso!", {duration: 5000});
      } else {
        throw new Error("Erro ao enviar o formulário.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar o formulário. Tente novamente.");
    } finally {
      setIsLoading(false); 
    }
  };

  const handleValidationErrors = () => {
    if (formState.errors) {
      Object.values(formState.errors).forEach((error) => {
        toast.error(error.message || "Erro no formulário.", {duration: 6000});
      });
    }
  };

  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
        <form
          onSubmit={handleSubmit(onSubmit,handleValidationErrors)}
          className="flex w-full flex-col gap-4 h-full"
        >
          <div className="flex justify-between gap-10 h-full  tablet:flex-col">
            <div className="flex flex-col w-full gap-2">
              <InputGroup
                type="text"
                label="Nome Completo"
                placeholder="Digite seu nome completo"
                id="nome" 
                register={register}
              />
              <InputGroup
                type="email"
                label="Email"
                placeholder="exemplo@email.com"
                id="email" 
                register={register}
              />
              <InputGroup
                type="text"
                label="Telefone"
                placeholder="Digite apenas números"
                id="telefone" 
                register={register}
              />
              <InputGroup
                type="text"
                label="CEP"
                placeholder="Digite sem espaços"
                id="cep"
                register={register}
              />
              <InputGroup
                type="text"
                label="Endereço"
                placeholder="Digite o endereço completo da sua residência"
                id="endereco"
                register={register}
              />
              <InputGroup
                type="text"
                label="Número da Residência"
                placeholder="Digite o número da residência"
                id="numero" 
                register={register}
              />
              <SelectGroup id="interesse" register={register}  />
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
                disabled={isLoading}
                type="submit"
                className="bg-primary text-white font-medium dark:bg-white dark:text-primary font-primary p-3"
              >
                {isLoading ? "Enviando..." : "Concluir"}
              </button>
            </div>
          </div>
        </form>
    </>
  );
}
