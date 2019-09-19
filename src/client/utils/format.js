export const formatDate = (date) => {
  let dd = new Date(date).getDate();
  if (dd < 10) dd = `0${dd}`;

  let mm = new Date(date).getMonth() + 1;
  if (mm < 10) mm = `0${mm}`;

  const yy = new Date(date).getFullYear();
  return `${dd}.${mm}.${yy}`;
};
