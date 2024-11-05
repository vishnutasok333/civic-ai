import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  id?: string;
  theme: "primary" | "secondary" | "error" | "warning" | "custom";
  className?: string;
  click?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, id, theme, className, click }) => {
  return (
    <button
      id={id}
      onClick={click}
      className={`${theme === "primary" ? "bg-[#8080FF]" : 
                  theme === "secondary" ? "bg-transparent" : 
                  theme === "error" ? "bg-red-600" : 
                  theme === "warning" ? "bg-orange-300" : ""} flex h-[44px] px-[16px] justify-center items-center gap-[8px] rounded-[10px] ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
