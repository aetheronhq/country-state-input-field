import React, { ReactNode } from "react";
interface CommandProps {
    children: ReactNode;
}
interface CommandInputProps {
    value: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}
interface CommandItemProps {
    children: ReactNode;
    value: string;
    onSelect: (value: string) => void;
    className?: string;
}
export declare const Command: React.FC<CommandProps>;
export declare const CommandInput: React.FC<CommandInputProps>;
export declare const CommandEmpty: React.FC<{
    children: ReactNode;
}>;
export declare const CommandGroup: React.FC<{
    children: ReactNode;
}>;
export declare const CommandItem: React.FC<CommandItemProps>;
export {};
