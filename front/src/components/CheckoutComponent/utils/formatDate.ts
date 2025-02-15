const formatOrderDateTime = (dateStr: string) => {
  const date = new Date(dateStr);

  const optionsDate: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", optionsDate);

  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedTime = date.toLocaleTimeString("en-US", optionsTime);

  return `${formattedDate} at ${formattedTime}`;
};

export default formatOrderDateTime;
