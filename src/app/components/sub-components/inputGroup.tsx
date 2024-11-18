import { FieldError } from "react-hook-form";

type InputGroupProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
};

export default function InputGroup({ type, label, placeholder, id,}: InputGroupProps) {
  return (
    <div className="text-primary dark:text-white flex flex-col w-full">
      <label htmlFor={id} className="text-lg font-normal ">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border px-3 py-2 bg-transparent border-primary  dark:border-white focus:outline-none"
      />
      
    </div>
  );
}
