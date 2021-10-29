import Button from 'react-bootstrap/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <section id="home-banner" className="text-white text-center py-5 d-flex align-items-center">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="fw-bold display-4 mb-3">Enjoy Vacation With <span className="text-danger bg-white rounded px-4">Pack & Go</span></h1>
                            <p>Travel to the any corner of the world, without going around in circles.</p>
                            <Button size="lg" variant="danger" className=" px-5 rounded-pill fw-bold">Book A Tour</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Banner;