import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
declare const ScrollBar: React.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    className?: string | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
} & React.RefAttributes<HTMLDivElement>>;
declare const ScrollArea: React.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    className?: string | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export { ScrollArea, ScrollBar };
