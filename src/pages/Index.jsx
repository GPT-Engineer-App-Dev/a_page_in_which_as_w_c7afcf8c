import React, { useState } from "react";
import { Box, Select, Text } from "@chakra-ui/react";

const countries = [
  { name: "United States", currency: "USD", states: ["California", "New York", "Texas"] },
  { name: "Canada", currency: "CAD", states: ["Ontario", "Quebec", "British Columbia"] },
  { name: "United Kingdom", currency: "GBP", states: ["England", "Scotland", "Wales"] },
];

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const country = countries.find((c) => c.name === event.target.value);
    setSelectedCountry(country);
    setSelectedState(null);
    setCities([]);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    // Simulating fetching cities based on the selected state
    const fetchedCities = ["City 1", "City 2", "City 3"];
    setCities(fetchedCities);
  };

  return (
    <Box p={4}>
      <Select placeholder="Select a country" onChange={handleCountryChange} mb={4}>
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </Select>

      {selectedCountry && (
        <Box mb={4}>
          <Text>Selected Country: {selectedCountry.name}</Text>
          <Text>Currency: {selectedCountry.currency}</Text>
        </Box>
      )}

      {selectedCountry && (
        <Select placeholder="Select a state" onChange={handleStateChange} mb={4}>
          {selectedCountry.states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </Select>
      )}

      {selectedState && (
        <Box mb={4}>
          <Text>Selected State: {selectedState}</Text>
          <Text>Cities:</Text>
          <ul>
            {cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default Index;
