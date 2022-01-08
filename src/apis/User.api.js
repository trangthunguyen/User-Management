import axios from "axios";
axios.defaults.baseURL = "https://60becf8e6035840017c17a48.mockapi.io/api";

export function getUser() {
  return axios.get("/users");
}

export function createUser(value) {
  return axios.post("/users", {
    name: value.name,
    city: value.city,
    email: value.email,
  });
}

export function editUser(value, id) {
  return axios.put("/users/" + id, {
    name: value.name,
    city: value.city,
    email: value.email,
  });
}

export function deleteUser(id) {
  return axios.delete("/users/" + id);
}
