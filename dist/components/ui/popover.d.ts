import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<
    PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>
>;
declare const PopoverContent: React.ForwardRefExoticComponent<
    Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        className?: string | undefined;
        align?: "center" | "start" | "end" | undefined;
        side?: "top" | "right" | "bottom" | "left" | undefined;
        sideOffset?: number | undefined;
        avoidCollisions?: boolean | undefined;
    } & React.RefAttributes<HTMLDivElement>
>;
export { Popover, PopoverTrigger, PopoverContent };
