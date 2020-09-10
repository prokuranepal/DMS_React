export const getToken = () => {
    let token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    };
    return headers;
  };