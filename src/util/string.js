export const titleCase = (str = '') => {
  const firstLetter = (str[0] && str[0].toUpperCase()) || "";
  return `${firstLetter}${str.slice(1)}`;
};
