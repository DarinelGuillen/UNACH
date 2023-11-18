// *UNACH\utils\storage.js

// Leer datos del almacenamiento local
export const getItem = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  
  // Escribir datos en el almacenamiento local
  export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // Eliminar un elemento del almacenamiento local
  export const removeItem = (key) => {
    localStorage.removeItem(key);
  };
  