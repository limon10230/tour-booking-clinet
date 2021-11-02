import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Services from '../Services/Services';
import Welcome from '../Welcome/Welcome';
import('./Home.css')

const Home = (props) => {
    return (
        <div className="home-container">
            <Container>
                <Row>
                    <Col sm={6}> <Welcome></Welcome></Col>
                    <Col sm={6}><img className="img" src={'https://3.imimg.com/data3/UD/UD/MY-13307380/images-banner-2-500x500.png'} alt="" /></Col>
                </Row>

            </Container>


            <Services></Services>

        </div>
    );
};

export default Home;