import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyPlans = () => {
    const { user } = useAuth();
    const email = user.email;

    // const [userPlans, setUserPlans] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/myPlans/${email}`)
    //         .then(res => res.json())
    //         .then(data => setUserPlans(data))
    // }, []);

    return (
        <div className="py-5">
            <h2>This is Plans Page</h2>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {/* {
                        userPlans.map(userPlan => <Col key={userPlan._id}>
                            <Card>
                                <Row>
                                    <Col md={4}>
                                        <CardImg src={userPlan.img} alt="" height="220" />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body className="rounded-3">
                                            <Card.Title className="mb-0">{userPlan.PlanTitle}</Card.Title>
                                            <Card.Text className="my-1">{userPlan.PlanDate}</Card.Text>
                                            <Card.Text>{userPlan.description}</Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>)
                    } */}

                </Row>
            </Container>
        </div>
    );
};

export default MyPlans;