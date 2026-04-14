import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "amela-yellow" | "amela-purple" | "amela-light";
  size?: "sm" | "md" | "lg";
}

export function Button({ 
  className = "", 
  variant = "primary", 
  size = "md", 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-amela-yellow text-amela-purple hover:bg-[#eef540]",
    secondary: "bg-amela-light-purple text-amela-purple hover:bg-[#b591eb]",
    outline: "border-2 border-white bg-transparent text-white hover:bg-white/10",
    "amela-yellow": "bg-amela-yellow text-amela-purple hover:bg-[#eef540]",
    "amela-purple": "bg-amela-purple text-white hover:bg-amela-purple-dark",
    "amela-light": "bg-amela-light-purple text-amela-purple hover:bg-[#b591eb]"
  };

  const sizes = {
    sm: "h-9 px-6 text-sm",
    md: "h-11 px-8 py-2",
    lg: "h-14 px-10 text-lg"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
