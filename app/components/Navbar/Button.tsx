import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`px-4 py-0.5 rounded-lg justify-center items-center flex ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
