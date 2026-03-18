import { type ButtonProps } from "../types/types";

const Button = ({ Icon, title, type, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      className="flex items-center justify-center gap-2 font-inter bg-primary text-base-100 text-xs font-bold py-3 px-4 rounded-xl hover:-translate-y-0.5 hover:bg-buttonHover transition-all duration-300"
    >
      {Icon && <Icon className="w-4 h-4" />} {title}
    </button>
  );
};

export default Button;
