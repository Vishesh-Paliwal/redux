import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './action';

function Cart() {
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();

    const handleRemove = (product) => {
        dispatch(removeFromCart(product));
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {Object.values(items).map((product) => (
                    <li key={product.id}>
                        {product.title} - Quantity: {product.quantity}
                        <button onClick={() => handleRemove(product)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
