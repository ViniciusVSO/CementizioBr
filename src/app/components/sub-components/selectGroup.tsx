

type SelectGroupProps = {
  id: string;
};

export default function SelectGroup({ id }: SelectGroupProps) {
  return (
    <div className="text-primary dark:text-white flex flex-col w-full">
      <label htmlFor={id} className="text-lg font-medium">
        Por que deseja receber o catálogo?
      </label>
      <select id={id} className="appearance-none border border-primary dark:border-white dark:bg-primary bg-transparent py-3 px-2 focus:outline-none">
        <option value="0">Selecione uma opção</option>
        <option value="conhecer_catalogo">Apenas conhecer o catálogo</option>
        <option value="arquiteto">Sou arquiteto</option>
        <option value="lojista">Sou lojista</option>
        <option value="consumidor">Sou consumidor</option>
      </select>
    </div>
  );
}
