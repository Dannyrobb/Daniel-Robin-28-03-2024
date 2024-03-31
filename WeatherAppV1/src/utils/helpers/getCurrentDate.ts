export const getCurrentDate = (): string => {
  // Get the current date
  const currentDate: Date = new Date();

  // Define month names array
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month, day, and year
  const month: string = monthNames[currentDate.getMonth()];
  const day: number = currentDate.getDate();
  const year: number = currentDate.getFullYear();

  // Format the date as "Month Day, Year"
  const formattedDate: string = `${month} ${day}, ${year}`;

  return formattedDate;
};
