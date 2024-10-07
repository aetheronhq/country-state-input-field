"use client";

import React, { useState } from "react";
import { CountryInput, StateInput, CountryStateInput } from "country-state-input-field";

export default function Home() {
    const [selectedCountryId, setSelectedCountryId] = useState<number | null>(null);
    const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(null);
    const [selectedStateId, setSelectedStateId] = useState<number | null>(null);

    return (
        <div className="flex flex-col items-center bg-[#0f0f11] p-8 text-white">
            <div className="w-full max-w-[700px] space-y-12">
                <div>
                    <h1 className="mb-4 text-center text-3xl font-bold">Country and State Selection</h1>
                    <div className="rounded-lg bg-[#1c1c1e] p-6">
                        <CountryStateInput
                            onSelectCountry={(country, countryCode) => {
                                setSelectedCountryId(country.id);
                                setSelectedCountryCode(countryCode);
                                console.log(`Selected country: ${country.name}, Country Code: ${countryCode}`);
                            }}
                            onSelectState={(state) => {
                                setSelectedStateId(state.id);
                                console.log(`Selected state: ${state.name}`);
                            }}
                            containerClassName="w-full flex flex-wrap gap-4"
                            countryClassName="flex-1 min-w-[200px]"
                            stateClassName="flex-1 min-w-[200px]"
                            countryInputClassName="text-gray-900 w-full bg-white rounded-md pl-1 pb-1 pt-1"
                            stateInputClassName="text-gray-900 w-full bg-white rounded-md pl-1 pb-1 pt-1"
                            layout="horizontal"
                        />
                    </div>
                </div>

                <div>
                    <h1 className="mb-4 text-center text-3xl font-bold">Individual Country and State Selection</h1>
                    <div className="space-y-4 rounded-lg bg-[#1c1c1e] p-6">
                        <CountryInput
                            onSelect={(country, countryCode) => {
                                setSelectedCountryId(country.id);
                                setSelectedCountryCode(countryCode);
                                console.log(`Selected country: ${country.name}, Country Code: ${countryCode}`);
                            }}
                            className="w-full"
                            inputClassName="text-gray-900 w-full bg-white rounded-md pl-1 pb-1 pt-1"
                        />
                        <StateInput
                            selectedCountryId={selectedCountryId}
                            onSelect={(state) => {
                                setSelectedStateId(state.id);
                                console.log(`Selected state: ${state.name}`);
                            }}
                            className="w-full"
                            inputClassName="text-gray-900 w-full bg-white rounded-md pl-1 pb-1 pt-1"
                        />
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <h2 className="mb-2 text-xl font-bold">Selected Values:</h2>
                    <p>Country ID: {selectedCountryId}</p>
                    <p>Country Code: {selectedCountryCode}</p>
                    <p>State ID: {selectedStateId}</p>
                </div>
            </div>
        </div>
    );
}
