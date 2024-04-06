import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { toggleDarkMode } from "../state/darkmodeSlice";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Switch, styled } from "@mui/material";

const StyledSwitch = styled(Switch)({
  "& .MuiSwitch-thumb": {
    backgroundColor: "transparent",
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#ccc",
  },
});

const DarkModeToggle: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <StyledSwitch
      checked={darkMode}
      onChange={handleToggleDarkMode}
      icon={<LightModeIcon style={{ color: "black", position: "relative", bottom: "3px" }} />}
      checkedIcon={<DarkModeIcon style={{ color: "white", position: "relative", bottom: "3px" }} />}
      sx={{ position: "relative", top: "5px" }}
    />
  );
};

export default DarkModeToggle;
