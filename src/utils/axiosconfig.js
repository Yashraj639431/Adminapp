const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.stringify(localStorage.getItem("user"))
  : null;

export const config = {
  Headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage}`,
    Accept: "application/json",
  },
};
