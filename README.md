# Country State Dropdown

A customizable React component for selecting countries and states.

## Installation

```bash
npm install country-state-input-field
```

or

```bash
yarn add country-state-input-field
```

## Usage

The package exports two main components: `CountryDropdown` and `StateDropdown`. You can use them separately or together.

### Basic Usage

```jsx
import React from 'react';
import { CountryDropdown, StateDropdown } from 'country-state-input-field';

const App = () => {
  return (
    <div>
      <h1>Country and State Selection</h1>
      <CountryDropdown />
      <StateDropdown />
    </div>
  );
};

export default App;
```

### Using with State Management

For a more integrated experience, you can use these components with a state management library like Zustand (which is included as a dependency). Here's an example:

```jsx
import React from 'react';
import { CountryDropdown, StateDropdown } from 'country-state-input-field';
import { create } from 'zustand';

// Create a store to manage the selected country and state
const useStore = create((set) => ({
  country: '',
  state: '',
  setCountry: (country) => set({ country, state: '' }),
  setState: (state) => set({ state }),
}));

const App = () => {
  const { country, state, setCountry, setState } = useStore();

  return (
    <div>
      <h1>Country and State Selection</h1>
      <CountryDropdown value={country} onChange={setCountry} />
      <StateDropdown country={country} value={state} onChange={setState} />
      <p>Selected: {country}, {state}</p>
    </div>
  );
};

export default App;
```

## Running the Example

This project includes a simple example to demonstrate the usage of the components. To run the example:

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Build the project: `npm run build` or `yarn build`
4. Run the example: `npm run example` or `yarn example`
5. Open your browser and navigate to `http://localhost:8080`

The example code can be found in the `example` directory.

## Features

- Country selection dropdown
- State/Province selection dropdown (populated based on selected country)
- Customizable styling
- TypeScript support

## API

### CountryDropdown

| Prop | Type | Description |
|------|------|-------------|
| value | string | The currently selected country |
| onChange | (country: string) => void | Callback function when a country is selected |

### StateDropdown

| Prop | Type | Description |
|------|------|-------------|
| country | string | The currently selected country (used to filter states) |
| value | string | The currently selected state |
| onChange | (state: string) => void | Callback function when a state is selected |

## Customization

The components use Tailwind CSS for styling. You can customize the appearance by overriding the CSS classes or by providing your own class names through props (if implemented).

## Development

To set up the development environment:

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Run the build process: `npm run build` or `yarn build`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
