import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { name } = useParams();
    const [countryDetails, setCountryDetails] = useState([]);
    console.log(name);
    console.log(countryDetails);
    console.log(countryDetails.name);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountryDetails(data))
    }, [])

    return (
        <div>
            <h2>This is Country Details</h2>
            {countryDetails.map((country, index) => (
                <p key={index}>Hello, from {country.name} <br/>
                 Population: {country.population}!</p>
            ))}
        </div>
    );
};

export default CountryDetails;