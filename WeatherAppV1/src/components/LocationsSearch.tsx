import React, { useState, useEffect } from "react";
import { fetchLocations } from "../utils/api/locationAutocomplete";
import { TextField } from "@mui/material";
import { fetchWeather } from "../state/weatherSlice";
import { useAppDispatch } from "../state/store";
import { handleGeolocationPermission } from "../utils/api/fetchGeolocation";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import Autocomplete from "@mui/material/Autocomplete";
import { IconButton } from "@mui/material";
import { LocationData } from "../Interfaces/SearchLocation";

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
    // Validate input for English characters only
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
    <div style={{ display: "flex" }}>
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
        sx={{ width: 300, display: "block", marginTop: "20px", marginBottom: "20px" }}
        onChange={handleSelectChange}
        isOptionEqualToValue={() => true}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            error={!isInputValid} // Apply error state if input is not valid
            helperText={!isInputValid ? "Only English characters are allowed" : undefined} // Error message
            onChange={handleInputChange}
          />
        )}
        noOptionsText={!isInputValid ? "Only English characters are allowed" : "Search for a city!"}
      />
      <IconButton onClick={() => handleGeolocationPermission(dispatch)}>
        <MyLocationIcon />
      </IconButton>
    </div>
  );
};

export default LocationsSearch;
