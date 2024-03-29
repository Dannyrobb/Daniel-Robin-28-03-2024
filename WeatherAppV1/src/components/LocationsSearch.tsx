import React, { useState, useEffect, ChangeEvent } from "react";
import { fetchLocationsLocal } from "../utils/api/locationAutocomplete";
import { TextField, Box, Grid } from "@mui/material";
import { fetchWeather } from "../state/weatherSlice";
import { useAppDispatch, useAppSelector } from "../state/store";

import Autocomplete from "@mui/material/Autocomplete";

const LocationsSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [locationsList, setLocationsList] = useState(fetchLocationsLocal(""));

  const dispatch = useAppDispatch();

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setLocationsList(fetchLocationsLocal(inputValue));
    }, 300);
    // Cleanup function to clear the timer on component unmount and on each input change
    return () => clearTimeout(debounceTimer);
  }, [inputValue]);

  const handleInputChange = (e: any) => {
    console.log("input");
    setInputValue(e.target.value);
  };

  const handleSelectChange = (event: React.ChangeEvent<{}>, value: { label: string; value: string; key: string } | null) => {
    if (value) {
      console.log("Selected Location Key:", value.value);
      console.log("Selected Location Label:", value.label);
      dispatch(fetchWeather(value.value));
    }
  };
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={locationsList.map((location) => ({ label: location.LocalizedName, value: location.Key, key: location.Key }))}
      sx={{ width: 300 }}
      onChange={handleSelectChange}
      onInputChange={(e) => handleInputChange(e)}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
};

export default LocationsSearch;
