import React from "react";
interface CountryDropdownProps {
    id?: string;
    name?: string;
    value?: string;
    className?: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}
declare const CountryDropdown: React.FC<CountryDropdownProps>;
export default CountryDropdown;
