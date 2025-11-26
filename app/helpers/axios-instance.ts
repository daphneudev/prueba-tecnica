import axios from "axios";

export const REQRES_ENDPOINTS = {
  login: "/login",
  users: "/users?page=",
};

export const reqresService = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "reqres-free-v1",
  },
});

export const usersService = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "reqres-free-v1",
  },
});
