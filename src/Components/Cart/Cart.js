import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation = totalPopulation + country.population;
    }

    //const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0);
    // console.log(totalPopulation);

    return (
        <div>
            <p>Country Added : {cart.length}</p>
            <p>Total Population : {totalPopulation} </p>
        </div>
    );
};

export default Cart;