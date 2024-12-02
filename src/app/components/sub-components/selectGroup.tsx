import { UseFormRegister } from "react-hook-form";


type SelectGroupProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
};

export default function SelectGroup({ id, register }: SelectGroupProps) {
  return (
    <div className="text-primary dark:text-white flex flex-col w-full">
      <label htmlFor={id} className="text-lg font-medium">
        Por que deseja receber o catálogo?
      </label>
      <select id={id} {...register(id)} className="appearance-none border border-primary dark:border-white dark:bg-primary bg-transparent py-3 px-2 focus:outline-none">
        <option value="0">Selecione uma opção</option>
        <option value="Conhecer o Catalogo">Apenas conhecer o catálogo</option>
        <option value="Arquiteto">Sou arquiteto</option>
        <option value="Lojista">Sou lojista</option>
        <option value="Consumidor">Sou consumidor</option>
      </select>
    </div>
  );
}
