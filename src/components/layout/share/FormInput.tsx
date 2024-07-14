import { Input } from "@/components/ui/input";
import { Controller, useFormContext } from "react-hook-form";
interface FormProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
}

const FormInput = ({ name, type, placeholder, value }: FormProps) => {
  const {
    control,
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        type === "file" ? <input type={type} required onChange={(e) => field.onChange(e.target.files)} className="bg-white w-full text-black rounded-md py-1 px-2" placeholder={placeholder}></input>:
        <Input
          type={type}
          required
          className="text-black w-full"
          placeholder={placeholder}
          {...field}
          value={value ? value : field.value}
        />
      )}
    />
  );
};

export default FormInput;
