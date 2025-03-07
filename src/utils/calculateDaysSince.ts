export const calculateDaysSince = (date: string): number => {
  const currentDate = new Date();
  currentDate.setUTCHours(0, 0, 0, 0);

  const pastDate = new Date(date);
  pastDate.setUTCHours(0, 0, 0, 0);

  const timeDifference = currentDate.getTime() - pastDate.getTime();
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
};
