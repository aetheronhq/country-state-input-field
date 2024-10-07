import React from "react";
interface StateDropdownProps {
    id?: string;
    name?: string;
    value?: string;
    className?: string;
    onChange: (value: string) => void;
    country: string;
    disabled?: boolean;
}
declare const StateDropdown: React.FC<StateDropdownProps>;
export default StateDropdown;
