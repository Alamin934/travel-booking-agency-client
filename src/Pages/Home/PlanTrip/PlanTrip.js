import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const PlanTrip = () => {
    return (
        <div>
            <section className="py-5">
                <Container>
                    <div className="text-center mb-5">
                        <h1>Plan Your Trip Easly</h1>
                        <h5>Cum doctus civibus efficiantur in imperdiet deterruisset.</h5>
                    </div>
                    <Row className="g-4">
                        <Col xs={12} md={4} className="shadow bg-light p-3 rounded">
                            <img className="w-25" src="https://i.ibb.co/7CkTN4L/charles-deluvio-Lks7vei-e-Ag-unsplash-1.jpg" alt="" />
                            <h4 className="fw-normal mt-3
                            ">Itineraries studied in detail</h4>
                            <p className="fst-italic"><small>As you're persecuting the right, you'll come up with a nice, accurate Platonist, that's one.</small></p>
                        </Col>
                        <Col xs={12} md={4} className="shadow bg-light p-3 rounded">
                            <img className="w-25" src="https://i.ibb.co/7CkTN4L/charles-deluvio-Lks7vei-e-Ag-unsplash-1.jpg" alt="" />
                            <h4 className="fw-normal mt-3
                            ">Room and food included</h4>
                            <p className="fst-italic"><small>If you book any Tour Plans then you will get free room service and get free food for full Trip</small></p>
                        </Col>
                        <Col xs={12} md={4} className="shadow bg-light p-3 rounded">
                            <img className="w-25" src="https://i.ibb.co/7CkTN4L/charles-deluvio-Lks7vei-e-Ag-unsplash-1.jpg" alt="" />
                            <h4 className="fw-normal mt-3
                            ">Everything organized</h4>
                            <p className="fst-italic"><small>Organized as if in a practical argument, he barely realized that it wasn't a game. All the organizer practice.
                            </small></p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default PlanTrip;