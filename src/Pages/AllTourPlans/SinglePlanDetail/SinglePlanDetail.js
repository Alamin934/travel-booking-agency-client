import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const SinglePlanDetail = () => {
    // const {id} = useParams();
    return (
        <div>
            <section className="py-5">
                <Container>
                    <Row>
                        {/* TOUR PLAN DETAILS */}
                        <Col xs={12} md={8}>
                            <img className="img-fluid" src="https://i.ibb.co/7CkTN4L/charles-deluvio-Lks7vei-e-Ag-unsplash-1.jpg" alt="" />
                            <Row className="bg-white mx-0 p-3 mt-4 shadow">
                                <Col>
                                    <div className="d-flex">
                                        <h2>ICON</h2>
                                        <div className="ms-2">
                                            <h6 className="mb-0">Duration</h6>
                                            <small>2days</small>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="d-flex">
                                        <h2>ICON</h2>
                                        <div className="ms-2">
                                            <h6 className="mb-0">Address</h6>
                                            <small>35 Whitefriars St, London</small>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="d-flex">
                                        <h2>ICON</h2>
                                        <div className="ms-2">
                                            <h6 className="mb-0">Price</h6>
                                            <small>from $150 $142.50</small>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="bg-white p-4 mt-4 shadow">
                                <h2>Description</h2>
                                <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</small></p>
                            </div>
                        </Col>
                        {/* USER DETAILS */}
                        <Col xs={12} md={4}>
                            {/* USER DETAILS FORM */}

                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default SinglePlanDetail;