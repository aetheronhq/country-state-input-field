# Country State Input Field

A customizable React component library for selecting countries and states.

## Installation

```bash
npm install country-state-input-field
```

or

```bash
yarn add country-state-input-field
```

## Usage

The package exports three main components: `CountryInput`, `StateInput`, and `CountryStateInput`. You can use them
separately or together.

### Basic Usage

```jsx
import React, { useState } from "react";
import { CountryInput, StateInput, CountryStateInput } from "country-state-input-field";

const App = () => {
    const [selectedCountryId, setSelectedCountryId] = useState(null);
    const [selectedCountryCode, setSelectedCountryCode] = useState(null);
    const [selectedStateId, setSelectedStateId] = useState(null);

    return (
        <div>
            <h1>Country and State Selection</h1>
            <CountryStateInput
                onSelectCountry={(country, countryCode) => {
                    setSelectedCountryId(country.id);
                    setSelectedCountryCode(countryCode);
                }}
                onSelectState={(state) => setSelectedStateId(state.id)}
            />

            <h2>Individual Inputs</h2>
            <CountryInput
                onSelect={(country, countryCode) => {
                    setSelectedCountryId(country.id);
                    setSelectedCountryCode(countryCode);
                }}
            />
            <StateInput selectedCountryId={selectedCountryId} onSelect={(state) => setSelectedStateId(state.id)} />
        </div>
    );
};

export default App;
```

### Advanced Usage with Styling

You can customize the appearance of the components using className props:

```jsx
<CountryStateInput
    onSelectCountry={(country, countryCode) => {
        setSelectedCountryId(country.id);
        setSelectedCountryCode(countryCode);
    }}
    onSelectState={(state) => setSelectedStateId(state.id)}
    containerClassName="w-full flex flex-wrap gap-4"
    countryClassName="flex-1 min-w-[200px]"
    stateClassName="flex-1 min-w-[200px]"
    countryInputClassName="text-gray-900 w-full bg-white rounded-md pl-1 pb-1 pt-1"
    stateInputClassName="text-gray-900 w-full bg-white rounded-md pl-1 pb-1 pt-1"
    layout="horizontal"
/>

<CountryInput
    onSelect={(country, countryCode) => {
        setSelectedCountryId(country.id);
        setSelectedCountryCode(countryCode);
    }}
    className="w-full"
    inputClassName="text-gray-900 w-full bg-white rounded-md pl-1 pb-1 pt-1"
/>

<StateInput
    selectedCountryId={selectedCountryId}
    onSelect={(state) => setSelectedStateId(state.id)}
    className="w-full"
    inputClassName="text-gray-900 w-full bg-white rounded-md pl-1 pb-1 pt-1"
/>
```

## Features

-   Country selection input with search functionality
-   State/Province selection input (populated based on selected country)
-   Combined Country-State input component
-   Customizable styling
-   TypeScript support
-   Returns both full country object and country code

## API

### CountryStateInput

| Prop                  | Type                                            | Description                                   |
| --------------------- | ----------------------------------------------- | --------------------------------------------- |
| onSelectCountry       | (country: Country, countryCode: string) => void | Callback function when a country is selected  |
| onSelectState         | (state: State) => void                          | Callback function when a state is selected    |
| containerClassName    | string                                          | Class name for the container div              |
| countryClassName      | string                                          | Class name for the country input container    |
| stateClassName        | string                                          | Class name for the state input container      |
| countryInputClassName | string                                          | Class name for the country input element      |
| stateInputClassName   | string                                          | Class name for the state input element        |
| layout                | "horizontal" \| "vertical"                      | Layout direction for country and state inputs |

### CountryInput

| Prop           | Type                                            | Description                                  |
| -------------- | ----------------------------------------------- | -------------------------------------------- |
| onSelect       | (country: Country, countryCode: string) => void | Callback function when a country is selected |
| className      | string                                          | Class name for the container div             |
| inputClassName | string                                          | Class name for the input element             |

### StateInput

| Prop              | Type                   | Description                                |
| ----------------- | ---------------------- | ------------------------------------------ |
| selectedCountryId | number \| null         | The ID of the currently selected country   |
| onSelect          | (state: State) => void | Callback function when a state is selected |
| className         | string                 | Class name for the container div           |
| inputClassName    | string                 | Class name for the input element           |

## Customization

The components are designed to work with Tailwind CSS, but you can customize the appearance by providing your own class
names through the className props.

## Development

To set up the development environment:

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Run the build process: `npm run build` or `yarn build`

## Example Application

This project includes a test app that demonstrates a working implementation of the country-state-input-field package.
The test app showcases how to use the components in a real-world scenario and can serve as a reference for integrating
the package into your own projects.

### Running the Test App

To run the test app:

1. Build the main project: `npm run build` or `yarn build`
2. Navigate to the test app directory: `cd country-state-test-app`
3. Install dependencies: `npm install` or `yarn install`
4. Run the development server: `npm run dev` or `yarn dev`
5. Open your browser and navigate to `http://localhost:3000`

The test app code can be found in the `country-state-test-app` directory. It includes examples of:

-   Using the CountryStateInput component
-   Using CountryInput and StateInput components separately
-   Handling selected values (country name, country code, state name)
-   Applying custom styling to the components

We encourage you to explore the test app code to see how you can implement and customize the country-state-input-field
components in your own projects.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
