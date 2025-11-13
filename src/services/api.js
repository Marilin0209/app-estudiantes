// src/services/api.js
const BASE_URL = import.meta.env.VITE_API_URL;
const API_ENDPOINT = "/api/estudiantes";

export const getEstudiantes = async () => {
  const response = await fetch(`${BASE_URL}${API_ENDPOINT}`);
  const res = await response.json();

  return res;
};
