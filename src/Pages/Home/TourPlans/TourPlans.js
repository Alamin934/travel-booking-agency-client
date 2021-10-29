import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './TourPlans.css';

const TourPlans = () => {
    return (
        <div>
            <section className="py-5">
                <Container>
                    <h1 className="text-center mb-5">Our Tour PLans</h1>
                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card className="border-0">
                                <Card.Img className="img-fluid rounded" src="https://i.ibb.co/7CkTN4L/charles-deluvio-Lks7vei-e-Ag-unsplash-1.jpg" />
                                <div className="bg-white mx-3 shadow rounded card-details">
                                    <Card.Body>
                                        <Card.Text>
                                            <small className="text-muted">Location</small>
                                        </Card.Text>
                                        <Card.Title>Card title</Card.Title>
                                        <h5 className="fw-bold">$Price</h5>
                                        <Card.Text>
                                            <small className="text-muted">This is a longer card with supporting text below as a natural lead-in</small>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="py-3 bg-transparent d-flex align-items-baseline justify-content-between">
                                        <p className="mb-0">Duration</p>
                                        <Button variant="danger" className="d-block">Book Now</Button>
                                    </Card.Footer>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default TourPlans;