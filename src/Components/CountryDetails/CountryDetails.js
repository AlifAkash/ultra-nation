import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {name} = useParams();
    const [countryDetails, setCountryDetails] = useState({});

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountryDetails(data))
    },[])

    return (
        <div>
            <h2>This is Country Details</h2>
            <h1>{countryDetails.name}</h1>
        </div>
    );
};

export default CountryDetails;