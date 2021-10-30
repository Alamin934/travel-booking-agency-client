import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

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
        <div className="text-center py-5">
            <div>
                <Card className="p-5 w-50 mx-auto mt-5 border-dark">
                    <h2>Login With</h2>
                    <div className="d-grid w-75 mx-auto my-3">
                        <Button onClick={handleGoogleLogIn} variant="outline-dark" size="lg">Continue with Google</Button>
                    </div>

                </Card>
            </div>
        </div>
    );
};

export default Signin;