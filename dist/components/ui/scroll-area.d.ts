import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
declare const ScrollBar: React.ForwardRefExoticComponent<
    Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        className?: string | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
    } & React.RefAttributes<HTMLDivElement>
>;
interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
    className?: string;
    viewportClassName?: string;
}
declare const ScrollArea: React.ForwardRefExoticComponent<ScrollAreaProps & React.RefAttributes<HTMLDivElement>>;
export { ScrollArea, ScrollBar };
