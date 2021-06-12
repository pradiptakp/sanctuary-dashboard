import React from "react";

export const Button = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      className={`mt-8 align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none w-full px-4 py-2 rounded-lg text-white bg-indigo-600 active:bg-purple-600 hover:bg-indigo-700  ${
        props.disabled && "opacity-50"
      } ${className}`}
      {...props}
    />
  );
};

export default Button;
