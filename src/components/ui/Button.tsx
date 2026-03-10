import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type ButtonProps = ComponentProps<"button">;

export function Button({ children, className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "rounded-lg max-w-fit font-bold text-[16px] cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
