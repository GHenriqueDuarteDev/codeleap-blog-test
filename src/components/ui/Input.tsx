import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type InputProps = ComponentProps<"input"> & {
  as?: "input";
};

type TextareaProps = ComponentProps<"textarea"> & {
  as: "textarea";
};

type FieldProps = InputProps | TextareaProps;

export function Input({ className, ...props }: FieldProps) {
  const baseStyles =
    "border border-gray-500 rounded-lg px-3 py-1 placeholder:text-sm placeholder:opacity-50";

  if (props.as === "textarea") {
    const { ...textareaProps } = props;
    return <textarea className={cn(baseStyles, "resize-y", className)} {...textareaProps} />;
  }

  const { type = "text", ...inputProps } = props as InputProps;
  return <input type={type} className={cn(baseStyles, className)} {...inputProps} />;
}
