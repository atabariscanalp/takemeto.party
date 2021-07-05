import React from "react";
import { RoomTag } from "./rooms/RoomTag";

interface Error {
  key?: string;
  message: string;
  errCode?: number;
}

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  description?: string;
  label: string;
  inputClass?: string;
  error: Error;
};

export const Input: React.FC<InputProps> = ({
  description,
  label,
  inputClass = "",
  error,
  ...props
}) => {
  return (
    <div className={`flex flex-col mb-5`}>
      <label>{label}</label>
      <input
        type={"text"}
        className={`px-2 py-2 rounded border-2 border-${
          error ? "error-100" : "black"
        } mb-2 ${inputClass} w-20 focus:outline-none border-2`}
        {...props}
      />
      {error ? (
        <span className={"text-error text-xs"}>{error.message}</span>
      ) : (
        <span className={"text-grey text-xs"}>{description}</span>
      )}
    </div>
  );
};
