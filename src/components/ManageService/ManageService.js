import React, { useEffect, useState } from 'react';

import './ManageService.css';


const ManageService = () => {
    const [services, setServices] = useState([]);
    //console.log(products);
    useEffect(() => {
        fetch('https:/localhost:5000/addOrder')
            .then(response => response.json())
            .then(data => {
                setServices(data);
                //console.log(data);
            })
    }, [])

    // const handleDelete = (id) => {
    //     const url = https://howling-labyrinth-06347.herokuapp.com/addOrder/${id};
    //     fetch(url , {
    //         method: "DELETE"
    //     })
    //         .then(res =>res.json())
    //         .then(data => {
    //             console.log(data);
    //             if( data.deletedCount){
    //                 alert('Deleted')
    //                 const remaining = services.filter(service=> service._id !== id);
    //                 setServices(remaining)
    //             }
    //         })


    // }

    const handleDelete = id => {
        const proceed = window.confirm('are you sure u want ot delete this item')
        if (proceed) {
            const url = `https://localhost:5000/addOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successFully');
                        const remainingUsers = services.filter(user => user._id !== id);
                        console.log(remainingUsers);
                        setServices(remainingUsers);
                    }
                })
        }
    }
    return (
        <div className="container p-3 text-center">
            <br />
            <br />


            <h1 className="mt-3 mb-3 text-left">Manages Service</h1>
            {
                services.length === 0 &&
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden"></span>
                </div>
            }
            <table className="table productTable">
                <thead>
                    <tr className="bg-success">
                        <th>Events</th>

                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(pd =>

                        <tr>
                            <td>{pd.name}</td>

                            <td>{pd.price}</td>
                            <td><button className="btn btn-success">Edit</button> <button className="btn btn-danger" onClick={() => handleDelete(pd._id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
};

export default ManageService;