/*/ src/services/api.js
const BASE_URL = import.meta.env.VITE_API_URL;
const API_ENDPOINT = "/api/estudiantes";

export const getEstudiantes = async () => {
  const response = await fetch(`${BASE_URL}${API_ENDPOINT}`);
  const res = await response.json();

  return res;
}; */

// src/services/api.js
/**
 * Servicio centralizado para comunicarse con la API de estudiantes.
 * Todas las peticiones HTTP pasan por aquí.
 */

/*


const BASE_URL = import.meta.env.VITE_API_URL;
const API_ENDPOINT = "/api/estudiantes";

/**
 * Obtiene todos los estudiantes desde el backend
 * @returns {Promise<Array>} Lista de estudiantes
 */

/*Desde aqui sacar para codigo ANTERIOR!!!!!!!!*/

/*
export const getEstudiantes = async () => {
  try {
    const response = await fetch(`${BASE_URL}${API_ENDPOINT}`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data; // Retorna el array de estudiantes
  } catch (error) {
    console.error("Error al obtener estudiantes:", error);
    throw error; // Re-lanza el error para manejarlo en el componente
  }
};

/**
 * Crea un nuevo estudiante en el backend
 * @param {Object} estudiante - Datos del estudiante (nombre, apellido, mail, curso)
 * @returns {Promise<Object>} Estudiante creado con su ID
 */
/*export const crearEstudiante = async (estudiante) => {
  try {
    const response = await fetch(`${BASE_URL}${API_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estudiante),
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data; // Retorna el estudiante creado
  } catch (error) {
    console.error("Error al crear estudiante:", error);
    throw error;
  }
};

/**
 * Actualiza un estudiante existente
 * @param {string|number} id - ID del estudiante
 * @param {Object} estudiante - Nuevos datos del estudiante
 * @returns {Promise<Object>} Estudiante actualizado
 */

/*export const actualizarEstudiante = async (id, estudiante) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estudiante),
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al actualizar estudiante:", error);
    throw error;
  }
};

/**
 * Elimina un estudiante por su ID
 * @param {string|number} id - ID del estudiante a eliminar
 * @returns {Promise<Object>} Mensaje de confirmación
 */

/*export const eliminarEstudiante = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al eliminar estudiante:", error);
    throw error;
  }
};

/**
 * Obtiene un estudiante específico por su ID
 * @param {string|number} id - ID del estudiante
 * @returns {Promise<Object>} Datos del estudiante
 */

/*export const getEstudiante = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener estudiante:", error);
    throw error;
  }
}; */

const BASE_URL = import.meta.env.VITE_API_URL;
const API_ENDPOINT = "/api/estudiantes";

/**
 * Obtiene todos los estudiantes desde el backend
 */
export const getEstudiantes = async () => {
  try {
    const response = await fetch(`${BASE_URL}${API_ENDPOINT}`);

    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener estudiantes:", error);
    throw error;
  }
};

/**
 * Crea un nuevo estudiante en el backend
 */
export const crearEstudiante = async (estudiante) => {
  try {
    const response = await fetch(`${BASE_URL}${API_ENDPOINT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(estudiante),
    });

    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al crear estudiante:", error);
    throw error;
  }
};

/**
 * Actualiza un estudiante existente
 */
export const actualizarEstudiante = async (id, estudiante) => {
  try {
    const response = await fetch(`${BASE_URL}${API_ENDPOINT}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(estudiante),
    });

    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al actualizar estudiante:", error);
    throw error;
  }
};

/**
 * Elimina un estudiante por su ID
 */
export const eliminarEstudiante = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${API_ENDPOINT}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al eliminar estudiante:", error);
    throw error;
  }
};

/**
 * Obtiene un estudiante específico por su ID
 */
export const getEstudiante = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${API_ENDPOINT}/${id}`);

    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener estudiante:", error);
    throw error;
  }
};
