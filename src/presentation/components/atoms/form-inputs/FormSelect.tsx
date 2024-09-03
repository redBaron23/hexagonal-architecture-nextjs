import { Control } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

type Option = {
  key: string;
  value: string;
};

type Props = {
  control: Control<any>;
  name: string;
  label: string;
  options: Option[];
  placeholder: string;
  disabled?: boolean;
};

const FormSelect = ({
  control,
  name,
  label,
  options,
  placeholder,
  disabled = false,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              disabled={disabled}
              onValueChange={field.onChange}
              value={field.value}
            >
              <SelectTrigger id="custom-select" className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options.map((option) => (
                    <SelectItem key={option.key} value={option.key}>
                      {option.value}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default FormSelect;
