import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
console.log("API base URL:", API_URL); // check this in the browser console after deploying

const http = axios.create({ baseURL: API_URL });

export const getStudents = () => http.get("/students", { params: { t: Date.now() } }); // cache-buster
export const addStudent = (data) => http.post("/students", data);
export const updateStudent = (id, data) => http.put(`/students/${id}`, data);
export const deleteStudent = (id) => http.delete(`/students/${id}`);
