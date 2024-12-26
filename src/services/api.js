const API_URL = 'http://localhost:8080/items';

export const fetchItems = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

