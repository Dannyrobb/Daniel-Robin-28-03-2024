export const epochTimeConverter = (epochDate: number) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const milliseconds = epochDate < 1e12 ? epochDate * 1000 : epochDate;
  const date = new Date(milliseconds);
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
};
