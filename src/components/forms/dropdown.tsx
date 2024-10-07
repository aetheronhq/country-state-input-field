import React from "react";
import { ChevronDown, Search } from "lucide-react";
import { DropdownInputProps, DropdownListProps, Country } from "../../lib/types";

interface ExtendedDropdownInputProps extends DropdownInputProps {
    inputClassName?: string;
}

export const DropdownInput: React.FC<ExtendedDropdownInputProps> = ({
    placeholder,
    value,
    onClick,
    className,
    inputClassName,
    disabled,
}) => (
    <div
        className={`relative ${className} ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
        onClick={disabled ? undefined : onClick}
    >
        <div className="mb-2 flex w-full items-center rounded-md border border-gray-300 bg-white">
            <input
                type="text"
                readOnly
                value={value || placeholder}
                placeholder={placeholder}
                className={`flex-1 cursor-pointer rounded-md border border-gray-300 bg-white ${
                    value ? "text-gray-800" : "text-gray-500"
                } ${disabled ? "cursor-not-allowed" : ""} ${inputClassName || ""}`}
                style={{ paddingRight: "48px" }} // Increase padding-right to allow space for the icon
                disabled={disabled}
            />
            <ChevronDown className="pointer-events-none mr-3 h-5 w-5 text-gray-700" stroke="gray" />
        </div>
    </div>
);

export const DropdownList: React.FC<DropdownListProps> = ({
    items,
    onSelect,
    filter,
    setFilter,
    className,
    maxHeight = "300px",
}) => (
    <div className={`absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-gray-800 shadow-lg ${className}`}>
        <div className="border-b border-gray-700 p-2" style={{ paddingBottom: "0.25rem", paddingTop: "0.5rem" }}>
            <div className="flex items-center rounded-md bg-gray-700">
                <Search className="ml-3 h-4 w-4 text-gray-400" style={{ marginRight: "0.5rem" }} />
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="Search..."
                    className="ml-2 w-full rounded-md bg-gray-700 p-1 text-white placeholder-gray-400 outline-none"
                    style={{ padding: "0.25rem" }}
                />
            </div>
        </div>
        <div style={{ maxHeight, overflowY: "auto", paddingTop: "0.25rem" }} className="mt-2 py-2">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="cursor-pointer px-4 py-2 text-white hover:bg-gray-700"
                    onClick={() => onSelect(item)}
                >
                    {renderCountryItem(item as Country)}
                </div>
            ))}
        </div>
    </div>
);

const renderCountryItem = (country: Country) => (
    <div className="flex items-center gap-2">
        <span className="ml-2 mr-3" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
            {country.emoji}
        </span>
        <span>{country.name}</span>
    </div>
);
