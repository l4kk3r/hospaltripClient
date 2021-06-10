import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (name, email, password, confirmPassword) => {
  const { data } = await $host.post("auth/register", {
    name,
    email,
    password,
    confirmPassword,
  });
  //localStorage.setItem("token", data.jwtToken);
  return data;
};

export const login = async (email, password) => {
  const { data } = await $host.post("auth/login", {
    email,
    password,
  });
  // .catch(function (error) {
  //   if (error.response) {
  //     // Request made and server responded
  //     alert(error.response.data.message);
  //   }
  // });

  // localStorage.setItem("token", data.jwtToken);

  return data;
};
