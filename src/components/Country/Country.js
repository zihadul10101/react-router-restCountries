import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    //console.log(props.country);
    const {name,flag} =props.country;
    const flagStyle ={height:'50px'}
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
      }
   
    return (
        <div style={friendStyle} >
           <img style={flagStyle} src={flag} alt=""/>
            <h2>name: {name}</h2> 
          <button > <Link to={`/${name}`}>show detail </Link></button>
            
        </div>
    );
};

export default Country;