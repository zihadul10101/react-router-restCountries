import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetiles = () => {
    const {name} =useParams();
    const [country, setCountry] =useState([{}]);
    
   console.log(country);
    
    useEffect(()=>{
        const url=`https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data=>setCountry(data));
    },[])
    return (
        <div>
            <h1>country name:{name}</h1>
           <h2>capital: {country[0].capital}</h2>
           <h2>nativeName: {country[0].nativeName}</h2>
           <h2>population: {country[0].population}</h2>
           <h2>area: {country[0].area}</h2>
        

        </div>
    );
};

export default CountryDetiles;