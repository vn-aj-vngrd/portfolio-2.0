import { Slot } from "@radix-ui/react-slot";
import { type ClassValue, clsx } from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "glass"
    | "subtle";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const variants = {
      primary:
        "bg-foreground text-background hover:opacity-90 active:scale-[0.98] shadow-sm",
      secondary:
        "bg-muted text-foreground hover:bg-muted/80 active:scale-[0.98]",
      outline:
        "border border-border bg-transparent hover:bg-muted active:scale-[0.98]",
      ghost: "hover:bg-muted text-foreground active:scale-[0.98]",
      link: "text-accent underline-offset-4 hover:underline p-0 h-auto",
      glass:
        "bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 text-foreground active:scale-[0.98]",
      subtle:
        "bg-muted/50 hover:bg-accent hover:text-white text-muted-foreground active:scale-[0.98] transition-colors duration-300",
    };

    const sizes = {
      sm: "h-8 px-4 text-xs rounded-full",
      md: "h-11 px-6 py-2 rounded-full",
      lg: "h-14 px-8 text-lg rounded-full",
      icon: "h-10 w-10 rounded-full p-0 flex items-center justify-center",
    };

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 gap-2 cursor-pointer",
          variants[variant],
          variant !== "link" && sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
