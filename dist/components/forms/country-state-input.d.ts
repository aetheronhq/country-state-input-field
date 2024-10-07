import React from "react";
import { CountryStateInputProps } from "../../lib/types";
interface ExtendedCountryStateInputProps extends CountryStateInputProps {
    layout?: "horizontal" | "vertical";
    containerClassName?: string;
    countryClassName?: string;
    stateClassName?: string;
    countryInputClassName?: string;
    stateInputClassName?: string;
}
export declare const CountryStateInput: React.FC<ExtendedCountryStateInputProps>;
export { CountryInput } from "./country-input";
export { StateInput } from "./state-input";
export type { Country, State, CountryInputProps, StateInputProps } from "../../lib/types";
