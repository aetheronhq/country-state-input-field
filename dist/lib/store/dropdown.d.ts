interface DropdownStateProps {
    countryValue: string;
    setCountryValue: (countries: string) => void;
    openCountryDropdown: boolean;
    setOpenCountryDropdown: (openCountry: boolean) => void;
    stateValue: string;
    setStateValue: (state: string) => void;
    openStateDropdown: boolean;
    setOpenStateDropdown: (openState: boolean) => void;
}
export declare const useDropdownStore: import("zustand").UseBoundStore<import("zustand").StoreApi<DropdownStateProps>>;
export {};
