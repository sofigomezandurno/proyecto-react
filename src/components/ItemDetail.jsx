import React from 'react'
import {Card} from 'react-bootstrap';

export const ItemDetail = ({producto}) => {
    console.log(producto)
    return (
    <div>
        <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>{producto.nombre} </Card.Title>
                    <Card.Text>
                        {producto.precio}
                    </Card.Text>
                    <Card.Text>
                        {producto.detalle}
                    </Card.Text>
                    </Card.Body>
                </Card>
    </div>
    )
}

export default ItemDetail 
