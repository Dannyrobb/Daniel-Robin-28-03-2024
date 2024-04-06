import React from "react";
import { useAppDispatch, useAppSelector } from "../state/store";
import { toggleUnit } from "../state/toggleUnitSwitchSlice";
import { IconButton } from "@mui/material";
const TemperatureToggle: React.FC = () => {
  const unit = useAppSelector((state) => state.temperature.unit);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleUnit());
  };

  return (
    <IconButton onClick={handleClick} color="inherit" aria-label="toggle theme">
      {unit === "C" ? "°C" : "°F"}
    </IconButton>
  );
};

export default TemperatureToggle;
