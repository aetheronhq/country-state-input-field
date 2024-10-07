import React from "react";
import { DropdownInputProps, DropdownListProps } from "../../lib/types";
interface ExtendedDropdownInputProps extends DropdownInputProps {
    inputClassName?: string;
}
export declare const DropdownInput: React.FC<ExtendedDropdownInputProps>;
export declare const DropdownList: React.FC<DropdownListProps>;
export {};
