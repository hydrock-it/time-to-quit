export const getNonSmokingInfo = (smokingData) => {
  const date1 = new Date(smokingData.dateOfTerminated);
  const date2 = new Date();
  const dayWithoutCigarettes = Math.ceil(
    Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24),
  );
  const cigarettesInPack = Number(smokingData.cigarettesInPack);
  const cigarettesInDay = Number(smokingData.cigarettesInDay);
  const price = Number(smokingData.price);

  return {
    savedMoney: Math.trunc((cigarettesInDay / cigarettesInPack) + 1)
    * price * dayWithoutCigarettes,
    culcNotSmoked: cigarettesInDay * dayWithoutCigarettes,
    culcDaysWithoutCigarettes: dayWithoutCigarettes,
  };
};
