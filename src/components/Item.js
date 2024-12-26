import React from 'react';

function Item({name, quantity, expirationDate}) {
    return (
        <li>
            {name} - Quantity: {quantity} - Expiration Date: {expirationDate} 
        </li>
    );
}

export default Item;