import React from 'react';
import {Card} from 'react-bootstrap';

const CatCard = (props) => {
    return (
       
            <Card.Img className="catPics" variant="top" src={props.data.url} />
        
      
    )
}

export default CatCard