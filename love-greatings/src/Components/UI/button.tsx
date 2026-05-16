import React from "react";

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export default function Button({
  text,
  icon,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-pink-500 text-white hover:bg-pink-600 shadow-[0_10px_40px_rgba(236,72,153,0.4)]",
    secondary:
      "bg-white/70 backdrop-blur-md text-pink-500 border border-pink-200 hover:bg-white",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${styles[variant]}
        px-7 py-4 rounded-2xl
        font-semibold
        flex items-center gap-3
        transition-all duration-300
        hover:scale-105
        active:scale-95
      `}
    >
      {icon}
      {text}
    </button>
  );
}