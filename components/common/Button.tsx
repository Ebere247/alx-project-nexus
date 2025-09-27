// components/common/Button.tsx
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  success?: boolean;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  type = "button",
  onClick,
  disabled,
  loading,
  success,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const variantClasses: Record<string, string> = {
    primary: "font-nunito bg-[#F5681A] hover:bg-[#187C33] text-white",
    secondary: "font-nunito bg-[#187d33] hover:bg-[#f5671b] text-white",
    danger: "font-nunito bg-[#F2391F] hover:bg-[#F5681A] text-white",
  };

  const sizeClasses: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "font-semibold rounded-full transition-colors duration-200 flex items-center justify-center gap-2",
        variantClasses[variant],
        sizeClasses[size],
        (disabled || loading) && "opacity-50 cursor-not-allowed",
        success && "bg-[#f5671b] hover:bg-[#187d33] text-white",
        className
      )}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          {/* Spinner */}
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
