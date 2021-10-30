import React, { useEffect, useState } from 'react';
import { Card, CardImg, Col, Container, Row, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyPlans = () => {
    const { user } = useAuth();
    const email = user.email;

    const [userPlans, setUserPlans] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myPlans/${email}`)
            .then(res => res.json())
            .then(data => setUserPlans(data))
    }, [email]);

    if (userPlans.length === 0) {
        return <h2 className="text-center py-5 fw-bold">No Booking Plans Found</h2>
    }

    return (
        <div className="py-5">
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {
                        userPlans.map(userPlan => <Col key={userPlan._id}>
                            <Card>
                                <Row>
                                    <Col md={4}>
                                        <CardImg src={userPlan.url} alt="" />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body className="rounded-3">
                                            <Card.Title className="mb-0 fs-4">{userPlan.title}</Card.Title>
                                            <Card.Text className="my-1">Location: {userPlan.location}</Card.Text>
                                            <Card.Text className="my-1">From: {userPlan.date}</Card.Text>
                                            <div className="d-flex justify-content-between">
                                                <Card.Text className="my-1">Price: ${userPlan.price}</Card.Text>
                                                <Card.Text className="my-1">Total: {userPlan.totalPeople} People</Card.Text>
                                                <Card.Text className="my-1">Duration: {userPlan.days} Days</Card.Text>
                                            </div>
                                            <Button variant="danger" className="d-block">Cancel</Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default MyPlans;