import type { ComponentProps } from "react";

type CardProps = ComponentProps<"div">;

export function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-[#999999] overflow-hidden">
      {children}
    </div>
  );
}
