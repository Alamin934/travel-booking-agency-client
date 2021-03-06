import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAllPlans from '../../../hooks/useAllPlans';
import './TourPlans.css';

const TourPlans = () => {
    const { plans, isLoading } = useAllPlans();
    const history = useHistory();
    const handlePlanDetail = (id) => {
        const url = `/singlePlanDetail/${id}`;
        history.push(url);
    }
    if (!isLoading) {
        return <div className="text-center py-5">
            <Spinner animation="border" variant="danger" />
        </div>
    }
    return (

        <div>
            <section className="py-5">
                <Container>
                    <h1 className="text-center mb-4 fw-bold"><span className="text-danger">Our Tour</span> Plans</h1>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            plans.map(plan => <Col key={plan._id}>
                                <Card className="border-0">
                                    <Card.Img className="img-fluid rounded" src={plan?.url} />
                                    <div className="bg-white mx-3 shadow rounded card-details">
                                        <Card.Body>
                                            <Card.Text>
                                                <small className="text-muted"><FontAwesomeIcon className="me-1" size="lg" icon={faMapMarkerAlt} /> {plan.location}</small>
                                            </Card.Text>
                                            <Card.Title>{plan.title.slice(0, 30)}</Card.Title>
                                            <Card.Text>
                                                <small className="text-muted">{plan.description.slice(0, 80)}</small>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="py-3 bg-transparent d-flex align-items-baseline justify-content-between">
                                            <h5 className="fw-bold">${plan.price}</h5>
                                            <Button onClick={() => handlePlanDetail(plan._id)} variant="danger" className="d-block">Book Now</Button>
                                        </Card.Footer>
                                    </div>
                                </Card>
                            </Col>)
                        }
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default TourPlans;