import React, { useState } from "react";

function Item({ name, category }) {
    const [inCart, setInCart] = useState(false)

    function updateStatus() {
        setInCart((inCart) => !inCart)
    }
    const cartState = inCart ? 'in-cart' : '';
    const cartText = inCart ? 'Remove from Cart' : 'Add to Cart';
    return ( <

        <
        li className = { cartState } >
        <
        span > { name } < /span> <
        span className = "category" > { category } < /span> <

        button className = "add"
        onClick = { updateStatus } > { cartText } < /button> < /
        li >
    );
}
export default Item;