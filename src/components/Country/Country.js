import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Country = (props) => {
    //console.log(props.country);
    const {name,flag} =props.country;
    const flagStyle ={height:'50px'}
    const friendStyle = {
        // border: '1px solid purple',
        // margin: '20px',
        // padding: '20px',
        // borderRadius: '20px'
        // boxShadow:' 5px 5px blue',
        border: '3px solid purple',
        width:'20%',
        display:'grid'
      }
   
    return (
        <div style={friendStyle} >
          <Card>
    <Card.Img variant="top" style={flagStyle} src={flag}/>
    <Card.Body>
      <Card.Title><h2>name: {name}</h2></Card.Title>
      <Card.Text>
      <button > <Link to={`/${name}`}>show detail </Link></button>
      </Card.Text>
    </Card.Body>
    
  </Card>
            
        </div>
    );
};

export default Country;