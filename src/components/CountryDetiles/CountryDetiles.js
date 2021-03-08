import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card } from 'react-bootstrap';

const CountryDetiles = () => {
    const { name } = useParams();
    const [country, setCountry] = useState([{}]);

    //  console.log(country);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data));
    }, [])

   const CountryDetilesStyle = { display: 'flex' };
    return (
        <div style={CountryDetilesStyle}>
            {/* <h1>country name:{name}</h1>
            <h2>capital: {country[0].capital}</h2>
            <h2>nativeName: {country[0].nativeName}</h2>
            <h2>population: {country[0].population}</h2>
            <h2>area: {country[0].area}</h2> */}

            <Card.Body>

                <Card.Title><h1>country name: {name}</h1></Card.Title>
                <Card.Text>
                    <h2>capital: {country[0].capital}</h2>
                    <h2>nativeName: {country[0].nativeName}</h2>
                    <h2>population: {country[0].population}</h2>
                    <h2>area: {country[0].area}</h2>
                </Card.Text>

            </Card.Body>



        </div>
    );
};

export default CountryDetiles;