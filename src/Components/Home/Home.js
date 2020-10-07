import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';
import Cart from '../Cart/Cart';

const Home = () => {

    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.log(error))
    }, [])

    const handleAddCountry = (country) => {

        const newCart = [...cart, country];
        setCart(newCart);
    }
    return (
        <div>
            <h1>Country loaded = {countries.length}</h1>
            <Cart cart={cart}></Cart>
            <ul>
                {
                    countries.map(country => <Country handleAddCountry={handleAddCountry} country={country} key={country.alpha3Code}></Country>)
                }
            </ul>
        </div>
    );
};

export default Home;