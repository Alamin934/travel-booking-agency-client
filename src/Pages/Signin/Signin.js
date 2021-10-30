import React from 'react';
import { Button, Card, Col, Container, InputGroup, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Signin.css';

const Signin = () => {
    const { signInUsingGoogle, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            }).catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="text-center py-5 my-5">
            <div>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col md={7}>
                            <Card className="p-4 bg-light justify-content-center" style={{ height: '350px' }}>
                                <h2 className="mb-3 fw-bold">Welcome to <span className="text-danger">Peak & Go</span></h2>
                                <p className="mb-2">To get started, login to your Google Account.</p>
                                <div>
                                    <InputGroup className="mb-3 text-center justify-content-center">
                                        <div className="bg-white rounded shadow" style={{ width: 'auto' }}>
                                            <img width="25" className="m-3" src="https://i.ibb.co/pKfFv9L/google-logo.png" alt="" />
                                        </div>
                                        <Button className="shadow w-auto" onClick={handleGoogleLogIn} variant="primary" size="lg">Signin with Google</Button>
                                    </InputGroup>
                                </div>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Signin;