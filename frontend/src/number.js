export const number = (data) => {
  if (!data.format) return;
  return new Intl.NumberFormat("en-IN", {
    style: data.style || "currency",
    currency: "PKR",
    maximumSignificantDigits: 3,
  }).format(data.format);
};
