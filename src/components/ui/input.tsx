import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type InputProps = ComponentProps<"input">;

export function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "border border-gray-500 rounded-lg px-3 placeholder:text-sm placeholder:opacity-50",
        className
      )}
      {...props}
    />
  );
}
