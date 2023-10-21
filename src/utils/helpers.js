const offsetTimezone = (startDate, finalDate) => {
  const diffLocalToUTC = new Date().getTimezoneOffset() * 60000;
  startDate = new Date(startDate);
  finalDate = new Date(finalDate);
  finalDate.setUTCHours(23, 59, 59, 999);

  return {
    startDate: new Date(startDate.getTime() + diffLocalToUTC),
    finalDate: new Date(finalDate.getTime() + diffLocalToUTC),
  };
};

module.exports = {
  offsetTimezone,
};
