import { useEffect, useState } from "react";
import { fetchItems } from "../services/api";
import Item from './Item';

function ItemList(){

    // Declaring the items state
    const [items, setItems] = useState([]);  // initializing "items" as a empty array

    // We'll fetch items using useEffect() hook only when the component mounts
    useEffect(() => {
        const getItems = async () => {
            try{
                // API calling for fetching the items
                const data = await fetchItems();
                console.log("Fetched items: ", data);
                setItems(data);
            }
            catch(error){
                console.error("Error fetching Items: ", error);
            }
        };

        getItems(); // We'll call this function to fetch the items via API calls
    }, []);

    // Rendering the list of items
    return (
        <div>
            <h1>Inventory Items</h1>
            <ul>
                {items.length > 0 ? (
                    items.map((item) => (
                        <Item
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            expirationDate={item.expirationDate}
                            />
                        ))
                    ) : (
                        <p>No items available.</p> // Show a fallback message if the items array is empty
                    )}
            </ul>
        </div>
    );
}

export default ItemList; 