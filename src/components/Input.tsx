import React from "react";

type TextInputProps = {
  title: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "password" | "url";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

const TextInput = ({
  title,
  placeholder,
  value,
  onChange,
  type = "text",
  disabled = false,
  className = "",
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
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`border font-normal text-md text-textColor ${className} rounded-md p-2 w-full ${
            icon ? "pl-8" : ""
          } focus:outline-none focus:ring-2 focus:ring-buttonColor disabled:opacity-50`}
        />
      </div>
    </div>
  );
};

export default TextInput;
