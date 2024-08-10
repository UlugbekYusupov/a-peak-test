// Select.tsx
import React from "react";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  className?: string;
};

const Select = ({
  options,
  value,
  onChange,
  label,
  className,
}: SelectProps) => {
  return (
    <div className={`flex flex-col w-full gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm text-labelColor font-normal">{label}</label>
      )}
      <select
        value={value}
        onChange={onChange}
        className={`border font-normal text-md text-textColor rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-buttonColor disabled:opacity-50`}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
