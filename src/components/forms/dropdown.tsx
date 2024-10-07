import classNames from "classnames";
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
        className={classNames("relative", className, {
            "cursor-not-allowed opacity-50": disabled,
            "cursor-pointer": !disabled,
        })}
        onClick={disabled ? undefined : onClick}
    >
        <div
            className={classNames("flex w-full items-center rounded-md", {
                "border border-gray-300": !inputClassName?.includes("border-none"),
                "bg-white": !inputClassName?.includes("bg-"), // Default bg unless overridden
            })}
        >
            <input
                type="text"
                readOnly
                value={value || placeholder}
                placeholder={placeholder}
                className={classNames(
                    "flex-1 cursor-pointer rounded-md", // Default styling
                    { "text-gray-800": value && !inputClassName?.includes("text-") }, // Default text color if no override
                    { "text-gray-500": !value && !inputClassName?.includes("text-") }, // Default placeholder color if no override
                    { "cursor-not-allowed": disabled }, // Disabled styles
                    inputClassName, // Merge user-passed classes
                )}
                style={{ paddingRight: "48px" }} // Space for Chevron
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
    <div
        className={classNames(
            "absolute z-10 mt-1 w-full rounded-md shadow-lg",
            {
                "border border-gray-300 bg-gray-800":
                    !className?.includes("border-none") && !className?.includes("bg-"),
            },
            className,
        )}
    >
        <div className="border-b border-gray-700 p-2" style={{ paddingBottom: "0.25rem", paddingTop: "0.5rem" }}>
            <div className="flex items-center rounded-md bg-gray-700">
                <Search className="ml-3 h-4 w-4 text-gray-400" style={{ marginRight: "0.5rem" }} />
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="Search..."
                    className={classNames(
                        "ml-2 w-full rounded-md p-1 text-gray-600 placeholder-gray-400 outline-none",
                        { "bg-gray-700": !className?.includes("bg-") }, // Default bg unless overridden
                    )}
                    style={{ padding: "0.25rem", color: "gray" }}
                />
            </div>
        </div>
        <div style={{ maxHeight, overflowY: "auto", paddingTop: "0.25rem" }} className="bg-nhir-input-box mt-2 py-2">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="cursor-pointer px-4 py-1 text-white hover:bg-gray-700"
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
