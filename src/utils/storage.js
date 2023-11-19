// *UNACH\utils\storage.js
// This module provides utility functions for interacting with local storage.

// Leer datos del almacenamiento local (Read data from local storage)
export const getItem = (key) => {
  // Retrieve data from local storage
  const data = localStorage.getItem(key);

  // Parse and return the data if it exists, otherwise return null
  return data ? JSON.parse(data) : null;
};

// Escribir datos en el almacenamiento local (Write data to local storage)
export const setItem = (key, value) => {
  // Convert the value to a JSON string and store it in local storage
  localStorage.setItem(key, JSON.stringify(value));
};

// Eliminar un elemento del almacenamiento local (Remove an item from local storage)
export const removeItem = (key) => {
  // Remove the item with the specified key from local storage
  localStorage.removeItem(key);
};
