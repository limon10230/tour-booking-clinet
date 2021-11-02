import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import('./Service.css')

const Service = (props) => {
    const { _id, img, name, description, price } = props.service;
    return (
        <div>


            <Card className='card' style={{ width: '18rem' }}>


                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <h3>{name}</h3>
                    </Card.Title>
                    <Card.Text>

                        <p> {description}</p>
                    </Card.Text>
                    <Card.Text>

                        <p> Price: {price}</p>
                    </Card.Text>
                    <Link to={`/appointment/${_id}`}>

                        <Button className="button">Booking</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;