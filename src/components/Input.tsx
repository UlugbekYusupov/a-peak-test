import React from "react";
import { Controller } from "react-hook-form";

type TextInputProps = {
  title: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  control: any;
  name: string;
  rules?: object;
  icon?: React.ReactNode;
};

const TextInput = ({
  title,
  placeholder,
  value,
  onChange,
  disabled = false,
  className = "",
  control,
  name,
  rules = {},
  icon,
}: TextInputProps) => {
  return (
    <div className={`relative flex flex-col ${className} w-full gap-1.5`}>
      {title !== "Website" ? (
        <label className="text-sm text-labelColor font-normal">{title}</label>
      ) : (
        ""
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder={placeholder}
              disabled={disabled}
              className={`border font-normal text-md text-textColor ${className} rounded-md p-2 w-full ${
                icon ? "pl-8" : ""
              } focus:outline-none focus:ring-2 focus:ring-buttonColor disabled:opacity-50`}
            />
          )}
        />
      </div>
    </div>
  );
};

export default TextInput;
