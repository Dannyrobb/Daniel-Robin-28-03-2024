import React, { useState, useEffect } from "react";
import { TextField, IconButton, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useAppDispatch } from "../state/store";
import { fetchLocations } from "../utils/api/locationAutocomplete";
import { fetchWeather } from "../state/weatherSlice";
import { handleGeolocationPermission } from "../utils/api/fetchGeolocation";
import { LocationData } from "../Interfaces/SearchLocation";
import { locationSearchStyles } from "../styles/styles";

const LocationsSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [locationsList, setLocationsList] = useState<LocationData[]>([]);
  const [isInputValid, setIsInputValid] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const debounceTimer = setTimeout(async () => {
      setLocationsList(await fetchLocations(inputValue));
    }, 300);
    return () => clearTimeout(debounceTimer);
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    setIsInputValid(/^[a-zA-Z\s]*$/.test(value));
  };

  const handleSelectChange = (
    event: React.ChangeEvent<{}>,
    value: { label: string; value: string; id: string; country: string } | null
  ) => {
    if (value) {
      dispatch(fetchWeather(value.id, value.label, value.country));
    }
  };

  return (
    <Box sx={locationSearchStyles.container}>
      <Autocomplete
        disablePortal
        disableClearable
        id="combo-box-demo"
        options={
          locationsList && locationsList.length > 0
            ? locationsList.map((location) => ({
                label: `${location.LocalizedName}`,
                value: location.Key,
                id: location.Key,
                key: location.Key,
                country: location.Country.LocalizedName,
              }))
            : []
        }
        sx={locationSearchStyles.autocomplete}
        onChange={handleSelectChange}
        isOptionEqualToValue={() => true}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            error={!isInputValid}
            helperText={!isInputValid ? "Only English characters are allowed" : undefined}
            onChange={handleInputChange}
          />
        )}
        noOptionsText={!isInputValid ? "Only English characters are allowed" : "Search for a city!"}
      />
      <IconButton onClick={() => handleGeolocationPermission(dispatch)}>
        <MyLocationIcon />
      </IconButton>
    </Box>
  );
};

export default LocationsSearch;
