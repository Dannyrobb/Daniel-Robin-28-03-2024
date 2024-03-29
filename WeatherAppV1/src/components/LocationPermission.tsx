import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../state/locationSlice";

const LocationPermission: React.FC = () => {
  const dispatch = useDispatch();
  const [askedBefore, setAskedBefore] = useState<boolean>(false);

  useEffect(() => {
    const hasAskedBefore = localStorage.getItem("askedForLocation");
    if (hasAskedBefore) {
      setAskedBefore(true);
    }
  }, []);

  const askForLocationPermission = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(position);
        dispatch(setLocation({ latitude, longitude }));
        localStorage.setItem("userLocation", JSON.stringify({ latitude, longitude }));
        localStorage.setItem("askedForLocation", "true");
        setAskedBefore(true);
      },
      () => {
        // User denied permission or some other error occurred
        // Default to Tel Aviv
        dispatch(setLocation({ latitude: 32.0853, longitude: 34.7818 }));
        localStorage.setItem("userLocation", JSON.stringify({ latitude: 32.0853, longitude: 34.7818 }));
        localStorage.setItem("askedForLocation", "true");
        setAskedBefore(true);
      }
    );
  };

  if (askedBefore) {
    return null; // If already asked before, don't render the button
  }

  return <button onClick={askForLocationPermission}>Allow Location Access</button>;
};

export default LocationPermission;
