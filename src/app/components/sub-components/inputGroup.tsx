
import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

type InputGroupProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
};

export default function InputGroup({ type, label, placeholder, id, register}: InputGroupProps) {
  return (
    <div className="text-primary dark:text-white flex flex-col w-full">
      <label htmlFor={id} className="text-lg font-normal ">
        {label}
      </label>
      <input
        {...register(id)}
        type={type}
        id={id}
        placeholder={placeholder}
        className="border px-3 py-2 bg-transparent border-primary  dark:border-white focus:outline-none"
      />
      
    </div>
  );
}
