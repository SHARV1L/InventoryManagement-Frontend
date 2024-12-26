const API_URL = 'http://localhost:8080/items';

export const fetchItems = async () => {
  const response = await fetch(API_URL);
  if(!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return await response.json();
};

