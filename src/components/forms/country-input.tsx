import React, { useState, useCallback, useMemo } from "react";
import countriesData from "../../data/countries.json";
import { Country, CountryInputProps } from "../../lib/types";
import { DropdownInput, DropdownList } from "./dropdown";

export const CountryInput: React.FC<CountryInputProps> = ({ onSelect, className, inputClassName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [filter, setFilter] = useState("");

    const countries = useMemo(() => countriesData as Country[], []);

    const filteredCountries = useMemo(
        () => countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase())),
        [countries, filter],
    );

    const handleSelect = useCallback(
        (country: Country) => {
            setSelectedCountry(country);
            onSelect(country, country.iso2); // We still use iso2 internally
            setIsOpen(false);
        },
        [onSelect],
    );

    return (
        <div className={`relative ${className || ""}`}>
            <DropdownInput
                placeholder="Select a country"
                value={selectedCountry ? `${selectedCountry.emoji} ${selectedCountry.name}` : ""}
                onClick={() => setIsOpen(!isOpen)}
                inputClassName={inputClassName}
            />
            {isOpen && (
                <DropdownList
                    items={filteredCountries}
                    renderItem={(item) => (
                        <div className="flex items-center">
                            <span className="mr-2">{(item as Country).emoji}</span>
                            <span>{item.name}</span>
                        </div>
                    )}
                    onSelect={(item) => {
                        if ("emoji" in item) {
                            handleSelect(item as Country);
                        }
                    }}
                    filter={filter}
                    setFilter={setFilter}
                />
            )}
        </div>
    );
};
