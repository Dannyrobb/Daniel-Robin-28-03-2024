import React, { useState, useEffect, ChangeEvent } from "react";
import { fetchLocations } from "../utils/api/locationAutocomplete";
import { TextField } from "@mui/material";
import { fetchWeather } from "../state/weatherSlice";
import { useAppDispatch } from "../state/store";

import Autocomplete from "@mui/material/Autocomplete";

const LocationsSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [locationsList, setLocationsList] = useState<any>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const debounceTimer = setTimeout(async () => {
      setLocationsList(await fetchLocations(inputValue));
    }, 300);
    // Cleanup function to clear the timer on component unmount and on each input change
    return () => clearTimeout(debounceTimer);
  }, [inputValue]);

  const handleInputChange = (e: any) => {
    console.log("input");
    setInputValue(e.target.value);
  };

  const handleSelectChange = (
    event: React.ChangeEvent<{}>,
    value: { label: string; value: string; Key: string; country: string } | null
  ) => {
    if (value) {
      console.log("Selected Location Key:", value.value);
      console.log("Selected Location Label:", value.label);
      console.log(value.country);
      console.log(value);
      dispatch(fetchWeather(value.Key, value.label, value.country));
    }
  };
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={
        locationsList && locationsList.length > 0
          ? locationsList.map((location) => ({
              label: `${location.LocalizedName}`,
              value: location.Key,
              Key: location.Key,
              country: location.Country.LocalizedName,
            }))
          : []
      }
      sx={{ width: 300, display: "block", marginTop: "20px", marginBottom: "20px" }}
      onChange={handleSelectChange}
      onInputChange={(e) => handleInputChange(e)}
      renderInput={(params) => <TextField {...params} label="City" />}
    />
  );
};

export default LocationsSearch;
