// Select.tsx
import { Controller } from "react-hook-form";

type SelectProps = {
  options: { value: string; label: string }[];
  name: string;
  control: any;
  rules?: object;
  disabled?: boolean;
  className?: string;
  label: string;
};

const Select = ({
  options,
  name,
  control,
  rules = {},
  disabled = false,
  className = "",
  label,
}: SelectProps) => {
  return (
    <div className={`flex flex-col w-full gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm text-labelColor font-normal">{label}</label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <select
            {...field}
            disabled={disabled}
            className={`border font-normal text-md text-textColor rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-buttonColor disabled:opacity-50`}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
};

export default Select;
