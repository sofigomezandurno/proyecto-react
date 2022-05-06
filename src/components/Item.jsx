import React from 'react'
import ItemCount from './ItemCount';
import {Row,Col, Card} from 'react-bootstrap';

function Item({detalle}) { 
    return (
    <div>
    <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1}).map((_, idx) => (
            <Col>
                <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>{detalle.nombre} </Card.Title>
                    <Card.Text>
                        {detalle.precio}
                        <ItemCount initial={1} stock={20}/>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row> 
        
    </div>
    )
}



export default Item