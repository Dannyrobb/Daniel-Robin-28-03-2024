import React, { useState, useEffect, ChangeEvent } from "react";
import { fetchLocations } from "../utils/api/locationAutocomplete";
import { TextField } from "@mui/material";
import { fetchWeather } from "../state/weatherSlice";
import { useAppDispatch } from "../state/store";
import { handleGeolocationPermission } from "../utils/api/fetchGeolocation";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import Autocomplete from "@mui/material/Autocomplete";
import { IconButton } from "@mui/material";
const LocationsSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [locationsList, setLocationsList] = useState<any>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const debounceTimer = setTimeout(async () => {
      setLocationsList(await fetchLocations(inputValue));
    }, 300);
    return () => clearTimeout(debounceTimer);
  }, [inputValue]);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  //CHANGED Key to key

  const handleSelectChange = (
    event: React.ChangeEvent<{}>,
    value: { label: string; value: string; id: string; country: string } | null
  ) => {
    if (value) {
      dispatch(fetchWeather(value.id, value.label, value.country));
    }
  };

  //CHANGED Key to key
  return (
    <div style={{ display: "flex" }}>
      <Autocomplete
        disablePortal
        disableClearable
        id="combo-box-demo"
        options={
          locationsList && locationsList.length > 0
            ? locationsList.map((location) => {
                return {
                  // label: `${location.LocalizedName}`,
                  label: `${location.LocalizedName}`,
                  value: location.Key,
                  id: location.Key,
                  key: location.Key,
                  country: location.Country.LocalizedName,
                };
              })
            : []
        }
        sx={{ width: 300, display: "block", marginTop: "20px", marginBottom: "20px" }}
        onChange={handleSelectChange}
        isOptionEqualToValue={() => true}
        onInputChange={(e) => handleInputChange(e)}
        renderInput={(params) => <TextField {...params} label="Search" />}
        noOptionsText="Search for a city!"
      />
      <IconButton onClick={() => handleGeolocationPermission(dispatch)}>
        <MyLocationIcon />
      </IconButton>
    </div>
  );
};

export default LocationsSearch;
