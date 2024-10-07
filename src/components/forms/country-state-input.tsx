import React, { useState, useCallback } from "react";
import { CountryStateInputProps, Country } from "../../lib/types";
import { CountryInput } from "./country-input";
import { StateInput } from "./state-input";

interface ExtendedCountryStateInputProps extends CountryStateInputProps {
    layout?: "horizontal" | "vertical";
    containerClassName?: string;
    countryClassName?: string;
    stateClassName?: string;
    countryInputClassName?: string;
    stateInputClassName?: string;
}

export const CountryStateInput: React.FC<ExtendedCountryStateInputProps> = ({
    onSelectCountry,
    onSelectState,
    containerClassName,
    countryClassName,
    stateClassName,
    layout = "vertical",
    countryInputClassName,
    stateInputClassName,
}) => {
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    const handleCountrySelect = useCallback(
        (country: Country) => {
            setSelectedCountry(country);
            onSelectCountry(country);
        },
        [onSelectCountry],
    );

    const containerClass = `${containerClassName || ""} ${
        layout === "horizontal" ? "flex flex-row space-x-4" : "flex flex-col space-y-4"
    }`;

    return (
        <div className={containerClass}>
            <CountryInput
                onSelect={handleCountrySelect}
                className={`flex-1 ${countryClassName || ""}`}
                inputClassName={countryInputClassName || ""}
            />
            <StateInput
                selectedCountryId={selectedCountry?.id || null}
                onSelect={onSelectState}
                className={`flex-1 ${stateClassName || ""}`}
                inputClassName={stateInputClassName || ""}
            />
        </div>
    );
};

// Re-export components for easier imports
export { CountryInput } from "./country-input";
export { StateInput } from "./state-input";
export type { Country, State, CountryInputProps, StateInputProps } from "../../lib/types";
