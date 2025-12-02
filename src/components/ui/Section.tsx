import { type ClassValue, clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
  id?: string;
}

export const Section = ({
  className,
  container = true,
  children,
  ...props
}: SectionProps) => {
  return (
    <section className={cn("section-padding", className)} {...props}>
      {container ? (
        <div className="container-custom w-full">{children}</div>
      ) : (
        children
      )}
    </section>
  );
};
