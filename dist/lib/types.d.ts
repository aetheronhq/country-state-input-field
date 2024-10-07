/// <reference types="react" />
export interface Country {
    id: number;
    name: string;
    emoji: string;
    iso2: string;
}
export interface State {
    id: number;
    name: string;
    country_id: number;
}
export type DropdownItem = Country | State;
export interface CountryInputProps {
    onSelect: (country: Country, countryCode: string) => void;
    className?: string;
    inputClassName?: string;
}
export interface StateInputProps {
    selectedCountryId: number | null;
    onSelect: (state: State) => void;
    className?: string;
    inputClassName?: string;
}
export interface DropdownInputProps {
    placeholder: string;
    value: string;
    onClick: () => void;
    className?: string;
    inputClassName?: string;
    disabled?: boolean;
}
export interface DropdownListProps {
    items: DropdownItem[];
    renderItem: (item: DropdownItem) => React.ReactNode;
    onSelect: (item: DropdownItem) => void;
    filter: string;
    setFilter: (filter: string) => void;
    className?: string;
    maxHeight?: string;
}
export interface CountryStateInputProps {
    onSelectCountry: (country: Country, countryCode: string) => void;
    onSelectState: (state: State) => void;
    containerClassName?: string;
    countryClassName?: string;
    stateClassName?: string;
    countryInputClassName?: string;
    stateInputClassName?: string;
}
