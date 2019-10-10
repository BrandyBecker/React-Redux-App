import React from 'react';
import {Card} from 'react-bootstrap';

const CatCard = (props) => {
    return (
        <Card style={{ width: '20rem', height: '18rem' }}>
            <Card.Img variant="top" src={props.data.url} />
        
        </Card>
    )
}

export default CatCard