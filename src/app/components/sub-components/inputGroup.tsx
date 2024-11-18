import { FieldError } from "react-hook-form";

type InputGroupProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
};

export default function InputGroup({ type, label, placeholder, id,}: InputGroupProps) {
  return (
    <div className="text-primary flex flex-col w-full">
      <label htmlFor={id} className="text-lg font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border p-2 border-primary focus:outline-none"
      />
      
    </div>
  );
}
