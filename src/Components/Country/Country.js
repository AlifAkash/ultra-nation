import React from 'react';
import { useHistory } from 'react-router-dom';
import './Country.css';

const Country = (props) => {

    const history = useHistory();

    const {name, population, region, flag} = props.country;
    const flagStyle = {height:"50px"};


    const handleAddCountry = props.handleAddCountry;

    const handleCountryDetails = (name) => {
        const url = `/country/${name}`;
        history.push(url)
    }

    return (
        <div className="Country">
            <h4>{name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>{population}</p>
            <small><p>{region}</p></small>
            <button 
                className="Button"
                onClick={() => handleAddCountry(props.country)}
            >add country</button>
            <br/>
            <br/>
            <button 
                className="Button"
                onClick={() => handleCountryDetails(name)}
            >See Details</button>

        </div>
    );
};

export default Country;