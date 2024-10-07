import React, { useState, useCallback, useMemo } from "react";
import statesData from "../../data/states.json";
import { State, StateInputProps } from "../../lib/types";
import { DropdownInput, DropdownList } from "./dropdown";

export const StateInput: React.FC<StateInputProps> = ({ selectedCountryId, onSelect, className, inputClassName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedState, setSelectedState] = useState<State | null>(null);
    const [filter, setFilter] = useState("");

    const states = useMemo(() => statesData as State[], []);

    const filteredStates = useMemo(
        () =>
            states
                .filter((state) => state.country_id === selectedCountryId)
                .filter((state) => state.name.toLowerCase().includes(filter.toLowerCase())),
        [states, selectedCountryId, filter],
    );

    const handleSelect = useCallback(
        (state: State) => {
            setSelectedState(state);
            onSelect(state);
            setIsOpen(false);
        },
        [onSelect],
    );

    return (
        <div className={`relative ${className || ""}`}>
            <DropdownInput
                placeholder="Select a state"
                value={selectedState?.name || ""}
                onClick={() => setIsOpen(!isOpen)}
                disabled={!selectedCountryId}
                inputClassName={inputClassName}
            />
            {isOpen && (
                <DropdownList
                    items={filteredStates}
                    renderItem={(item) => <span>{item.name}</span>}
                    onSelect={(item) => {
                        if (!("emoji" in item)) {
                            handleSelect(item as State);
                        }
                    }}
                    filter={filter}
                    setFilter={setFilter}
                />
            )}
        </div>
    );
};
