import React from "react";
export interface Country {
    id: number;
    name: string;
    emoji: string;
}
export interface State {
    id: number;
    name: string;
    country_id: number;
}
interface CountryInputProps {
    onSelect: (country: Country) => void;
    className?: string;
}
interface StateInputProps {
    selectedCountryId: number | null;
    onSelect: (state: State) => void;
    className?: string;
}
export declare const CountryInput: React.FC<CountryInputProps>;
export declare const StateInput: React.FC<StateInputProps>;
export declare const CountryStateInput: React.FC<{
    onSelectCountry: (country: Country) => void;
    onSelectState: (state: State) => void;
    className?: string;
}>;
export {};
