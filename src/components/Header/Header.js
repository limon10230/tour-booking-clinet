import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirbase from '../../hooks/useFirebase';
import('./Header.css')

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="header-container ">
            <div collapseOnSelect expand="lg">

                <Container >
                    <Row>
                        <Col><h2 style={{ color: 'gold', fontSize: '40px' }}>Tour Booking</h2></Col>
                        <Col ><nav >

                            <NavLink className="navlink"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "lightyellow"
                                }}

                                to="/home">Home</NavLink>
                            <NavLink className="navlink"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "lightyellow",

                                }}
                                to="/about">About</NavLink>
                            <NavLink className="navlink"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "lightyellow"
                                }}
                                to="/services"
                            >Services</NavLink>



                            <NavLink

                                className="navlink"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "lightyellow"
                                }}
                                to="/addService">Add Service</NavLink>
                            <NavLink className="navlink"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "lightyellow"
                                }}
                                to="/manageService">Manage Service</NavLink>
                            <NavLink className="navlink"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "lightyellow"
                                }}
                                to="/myOrders">My Orders</NavLink>
                            <NavLink className="navlink"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "lightyellow"
                                }}
                                to="/contact">Contact Us</NavLink>
                            <span style={{ color: "white" }}> {user.displayName}</span>

                            {
                                user.email ?
                                    <button onClick={logOut}>Sign Out</button>
                                    :

                                    <NavLink className="navlink"
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "lightyellow"
                                        }}
                                        to="/signin">Sign In</NavLink>
                            }

                        </nav>
                        </Col>
                    </Row>

                </Container>

            </div>


        </div>




    );
};

export default Header;