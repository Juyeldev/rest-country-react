import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const { name, population, area, region, flags } = props.country
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <p>Region: {region}</p>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>

        </div>
    );
};

export default Country;