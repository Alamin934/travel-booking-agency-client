import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const SinglePlanDetail = () => {
    const { id } = useParams();
    const [plan, setPlan] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/allPlans/${id}`)
            .then(res => res.json())
            .then(data => setPlan(data))
    }, [id]);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data)
    return (
        <div>
            <section className="py-5">
                <Container>
                    <Row>
                        {/* TOUR PLAN DETAILS */}
                        <Col xs={12} md={8}>
                            <img className="img-fluid" src={plan.url} alt="" />
                            <Row className="bg-white mx-0 p-3 mt-4 shadow">
                                <Col>
                                    <div className="d-flex">
                                        <h5>ICON</h5>
                                        <div className="ms-2">
                                            <h6 className="mb-0">Duration</h6>
                                            <small>2days</small>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="d-flex">
                                        <h5>ICON</h5>
                                        <div className="ms-2">
                                            <h6 className="mb-0">Location</h6>
                                            <small>{plan.location}</small>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="d-flex">
                                        <h5>ICON</h5>
                                        <div className="ms-2">
                                            <h6 className="mb-0">Price</h6>
                                            <small>${plan.price}</small>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="d-flex">
                                        <h5>ICON</h5>
                                        <div className="ms-2">
                                            <h6 className="mb-0">Group Size</h6>
                                            <small>5 People</small>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="bg-white p-4 mt-4 shadow">
                                <h5>Description</h5>
                                <p><small>{plan.description}</small></p>
                            </div>
                        </Col>
                        {/* USER DETAILS */}
                        <Col xs={12} md={4}>
                            {/* USER DETAILS FORM */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>Tour Date</label>
                                <input type="date" {...register("date")} className="form-control form-control-lg mb-3" placeholder="Tour Date" />

                                <label>Duration</label>
                                <input type="number" {...register("duration")} className="form-control form-control-lg mb-3" placeholder="days" />

                                <label>Total People</label>
                                <input type="number" {...register("groupSize")} className="form-control form-control-lg mb-3" placeholder="Total People" />

                                <label>Email</label>
                                <input {...register("email")} defaultValue="user email" className="form-control form-control-lg mb-3" placeholder="Email" />

                                <label>User Name</label>
                                <input {...register("useName")} defaultValue="user name" className="form-control form-control-lg mb-3" placeholder="User Name" />

                                <div className="text-end mt-4">
                                    <input className="btn btn-outline-danger btn-lg" type="submit" value="Book Now" />
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default SinglePlanDetail;