import React from 'react';
import {Card} from 'react-bootstrap';

const CatCard = (props) => {
    return (
        <Card className="singleCard" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={props.data.url} />
        
        </Card>
    )
}

export default CatCard