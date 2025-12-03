import React from "react";

import { cn } from "@/lib/utils";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, as: Component = "div", ...props }, ref) => {
    return <Component ref={ref} className={cn(className)} {...props} />;
  }
);
Box.displayName = "Box";

interface FlexProps extends BoxProps {
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  align?: "start" | "end" | "center" | "baseline" | "stretch";
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  gap?: string; // Tailwind gap class e.g. "gap-4"
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      direction = "row",
      wrap = "nowrap",
      align,
      justify,
      gap,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        className={cn(
          "flex",
          direction === "col" && "flex-col",
          direction === "row-reverse" && "flex-row-reverse",
          direction === "col-reverse" && "flex-col-reverse",
          wrap === "wrap" && "flex-wrap",
          wrap === "wrap-reverse" && "flex-wrap-reverse",
          align === "start" && "items-start",
          align === "end" && "items-end",
          align === "center" && "items-center",
          align === "baseline" && "items-baseline",
          align === "stretch" && "items-stretch",
          justify === "start" && "justify-start",
          justify === "end" && "justify-end",
          justify === "center" && "justify-center",
          justify === "between" && "justify-between",
          justify === "around" && "justify-around",
          justify === "evenly" && "justify-evenly",
          gap,
          className
        )}
        {...props}
      />
    );
  }
);
Flex.displayName = "Flex";

type StackProps = FlexProps;

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction = "col", gap = "gap-2", ...props }, ref) => {
    return (
      <Flex
        ref={ref}
        direction={direction}
        gap={gap}
        className={cn(className)}
        {...props}
      />
    );
  }
);
Stack.displayName = "Stack";

interface GridProps extends BoxProps {
  cols?: number;
  gap?: string;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols, gap, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(
          "grid",
          cols === 1 && "grid-cols-1",
          cols === 2 && "grid-cols-2",
          cols === 3 && "grid-cols-3",
          cols === 4 && "grid-cols-4",
          cols === 5 && "grid-cols-5",
          cols === 6 && "grid-cols-6",
          cols === 12 && "grid-cols-12",
          gap,
          className
        )}
        {...props}
      />
    );
  }
);
Grid.displayName = "Grid";

interface ContainerProps extends BoxProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "xl", ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 md:px-6",
          size === "sm" && "max-w-screen-sm",
          size === "md" && "max-w-screen-md",
          size === "lg" && "max-w-screen-lg",
          size === "xl" && "max-w-screen-xl",
          size === "2xl" && "max-w-screen-2xl",
          size === "full" && "max-w-full",
          className
        )}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { Box, Container, Flex, Grid, Stack };
