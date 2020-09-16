export const fetchHistory = (purchase) => {
  return {
    type: "FETCH_HISTORY",
    payload: purchase,
  };
};
