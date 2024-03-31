export const unitConverter = (temp: number): number => {
  return Math.round((temp * 9) / 5 + 32);
};
