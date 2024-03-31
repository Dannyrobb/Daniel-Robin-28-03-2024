export const getCurrentDate = (): string => {
  const currentDate: Date = new Date();
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

  const month: string = monthNames[currentDate.getMonth()];
  const day: number = currentDate.getDate();
  const year: number = currentDate.getFullYear();

  const formattedDate: string = `${month} ${day}, ${year}`;

  return formattedDate;
};
