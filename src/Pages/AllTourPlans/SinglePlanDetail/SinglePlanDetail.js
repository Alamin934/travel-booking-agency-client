import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const SinglePlanDetail = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [plan, setPlan] = useState({});
    const [isBooking, setIsBooking] = useState(0);
    const [isPeople, setIsPeople] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/allPlans/${id}`)
            .then(res => res.json())
            .then(data => setPlan(data))
    }, [id]);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/userPlans', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thank you for your Booking, we recived your info');
                    reset();
                }
            })

    };
    const addDays = (e) => {
        const days = e.target.value;
        setIsBooking(days);
    }
    const addPeople = (e) => {
        const people = e.target.value;
        setIsPeople(people);
    }

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
                                            <small>{isBooking} days</small>
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
                                            <small>{isPeople}  People</small>
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
                                <label>Title</label>
                                {plan.title && <input {...register("title")} className="form-control form-control-lg mb-3" defaultValue={plan?.title} />}

                                <label>Tour From</label>
                                <input type="date" {...register("date", { required: true })} className="form-control form-control-lg mb-3" placeholder="Tour From" />

                                <label>Duration</label>
                                <input type="number" {...register("days", { required: true })} className="form-control form-control-lg mb-3" onChange={addDays} placeholder="days" />

                                <label>Total People</label>
                                <input type="number" {...register("totalPeople", { required: true })} className="form-control form-control-lg mb-3" onChange={addPeople} placeholder="Total People" />

                                <label>Price</label>
                                {plan.price && <input type="number" {...register("price")} className="form-control form-control-lg mb-3" defaultValue={plan?.price} />}

                                <label>Location</label>
                                {plan.location && <input {...register("location")} className="form-control form-control-lg mb-3" defaultValue={plan?.location} />}

                                <label>Image URL</label>
                                {plan.url && <input {...register("url")} className="form-control form-control-lg mb-3" defaultValue={plan?.url} />}

                                <label>Email</label>
                                <input {...register("email")} defaultValue={user?.email} className="form-control form-control-lg mb-3" placeholder="Email" />

                                <label>User Name</label>
                                <input {...register("useName")} defaultValue={user?.displayName} className="form-control form-control-lg mb-3" placeholder="User Name" />

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