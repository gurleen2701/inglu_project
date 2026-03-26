import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/contacts"
});

export const getContacts = () => API.get("/");
export const addContact = (data) => API.post("/", data);
export const deleteContact = (id) => API.delete(`/${id}`);
export const updateContact = (id, data) => API.put(`/${id}`, data);