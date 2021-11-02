import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

import("./Appointment.css")



const Appointment = () => {
    const { user } = useAuth();

    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    // const [singleService, setSingleService] = useState({});


    useEffect(() => {


        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleProductOrder = (data) => {
        console.log('Order submitted');
        const orderDetails = { ...user, ...services, date: new Date() }
        console.log(orderDetails);
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log('server side response', data);
                alert('Order placed successfully');
            });

    }
    // useEffect(() => {


    //     const foundService = services.find(service => service.id == serviceId)
    //     console.log(foundService)
    //     setSingleService(foundService)

    // }, [services]);



    return (
        <div className="">
            <br />
            <br />
            <br />
            <br />
            <br />



            <div className="container mt-3">
                <h1>Orders</h1><br />
                <table class="table caption-top">
                    <thead>
                        <tr>
                            <th scope="col">Events</th>

                            <th scope="col">Ticket/Package</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>{services.name}</td>

                            <td>${services.price}</td>
                            <td><button className="btn btn-success">Edit</button> <button className="btn btn-danger">Delete</button></td>
                        </tr>
                        <tr>
                            <th colspan="2">Total</th>
                            <th>${services.price}</th>
                        </tr>
                    </tbody>
                </table>
                <button onClick={handleProductOrder} className="btn btn-success" style={{ float: 'right' }}>Confirm</button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );
};

export default Appointment;