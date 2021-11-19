import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';




const MyOrders = () => {
    const [orderedProduct, setOrderedProduct] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch("https://stark-forest-68756.herokuapp.com/orderedProduct")
            .then(result => result.json())
            .then(data => {
                setOrderedProduct(data)
                console.log(data);
            })
    }, [])

    let newOrders = [];
    for (let i = 0; i < orderedProduct.length; i++) {
        if (orderedProduct[i].email === user.email) {
            newOrders[i] = orderedProduct[i];
            console.log(newOrders);
        }
    }
    return (
        <div className="container mt-3 text-center">

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 className="text-center">Hey. {user.displayName}! You'r have {newOrders.length} orders</h3><br />
            {
                newOrders.length === 0 &&
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden"></span>
                </div>
            }
            {
                <table className="table ordersTable">
                    <thead>
                        <tr className="bg-success">
                            <th>Events</th>
                            <th>Tickets/package</th>
                            <th>Date</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderedProduct.map(pd =>
                            user.email === pd.email && <tr>
                                <td>{pd.name}</td>
                                <td>{pd.price}</td>
                                <td>{pd.date}</td>
                                <td>{pd.email}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
        </div>
    );
};

export default MyOrders;