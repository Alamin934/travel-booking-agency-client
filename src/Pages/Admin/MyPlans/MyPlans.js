import React, { useEffect, useState } from 'react';
import { Card, CardImg, Col, Container, Row, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyPlans = () => {
    const [isCancel, setIsCancel] = useState(null);
    const { user } = useAuth();
    const email = user.email;

    const [userPlans, setUserPlans] = useState([]);
    useEffect(() => {
        fetch(`https://limitless-beyond-03016.herokuapp.com/myPlans/${email}`)
            .then(res => res.json())
            .then(data => setUserPlans(data))
    }, [isCancel, email]);

    const handleCancelMyPlans = (id) => {
        const proceed = window.confirm('Are you sure, You want to Cancel this Plan?');
        if (proceed) {
            fetch(`https://limitless-beyond-03016.herokuapp.com/myPlans/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Cancel Successfully');
                        setIsCancel(true);
                    }
                    else {
                        setIsCancel(false);
                    }
                })
        }
    };

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
                                    <Col xs={12} md={4}>
                                        <CardImg src={userPlan.url} alt="" />
                                    </Col>
                                    <Col xs={12} md={8}>
                                        <Card.Body className="rounded-3">
                                            <Card.Title className="mb-0 fs-4">{userPlan.title}</Card.Title>
                                            <Card.Text className="my-1">Location: {userPlan.location}</Card.Text>
                                            <Card.Text className="my-1">From: {userPlan.date}</Card.Text>
                                            <div className="d-flex justify-content-between">
                                                <Card.Text className="my-1">Price: ${userPlan.price}</Card.Text>
                                                <Card.Text className="my-1">Total: {userPlan.totalPeople} People</Card.Text>
                                                <Card.Text className="my-1">Duration: {userPlan.days} Days</Card.Text>
                                            </div>
                                            <Card.Text className="my-1">Status: {userPlan.status}</Card.Text>
                                            <Button onClick={() => handleCancelMyPlans(userPlan._id)} variant="danger" className="d-block mt-3">Cancel</Button>
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