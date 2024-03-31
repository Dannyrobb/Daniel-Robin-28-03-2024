export const unitConverter = (unit: string, temp: number): number => {
  if (unit === "C") {
    return (temp * 9) / 5 + 32;
  } else if (unit === "F") {
    return ((temp - 32) * 5) / 9;
  } else {
    throw new Error("Invalid unit provided. Please use 'C' for Celsius or 'F' for Fahrenheit.");
  }
};
