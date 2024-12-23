export const requestStatusColors = (status) => {
  switch (status) {
    case "pending":
      return {
        color: "#161616",
        backgroundColor: "#ffb300dc",
      };
    case "declined":
      return {
        color: "#fff",
        backgroundColor: "#FF2929dc",
      };
    case "accepted":
      return {
        color: "#fff",
        backgroundColor: "#117554dc",
      };
    default:
      return {
        color: "#161616",
        backgroundColor: "#FFB200dc",
      };
  }
};

export const calcPercentageFromUnits = ({ totalUnits, currentUnits }) => {
  const percentage = (parseFloat(currentUnits) / parseFloat(totalUnits)) * 100;
  return percentage.toFixed(2);
};
