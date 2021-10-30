import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Table } from 'react-bootstrap';

const ManageAllPlans = () => {
    const [userPlans, setUserPlans] = useState([]);
    const [isDelete, setIsDelete] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/userPlans')
            .then(res => res.json())
            .then(data => setUserPlans(data))
    }, [isDelete]);
    const handleDeletePlan = (id) => {
        const proceed = window.confirm('Are you sure, You want to Delete this Plan?');
        if (proceed) {
            fetch(`http://localhost:5000/myPlans/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully');
                        setIsDelete(true);
                    }
                    else {
                        setIsDelete(false);
                    }
                })
        }
    };
    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Col>
                        <h2 className="mb-3">All Booking Plans List</h2>
                        <Table responsive="md">
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>Email Id</th>
                                    <th>Booking Date</th>
                                    <th>Plans Title</th>
                                    <th>Location</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userPlans.map(userPlan =>
                                        <tr key={userPlan._id}>
                                            <td>{userPlan.userName}</td>
                                            <td>{userPlan.email}</td>
                                            <td>{userPlan.date}</td>
                                            <td>{userPlan.title}</td>
                                            <td>{userPlan.location}</td>
                                            <td>
                                                <Form.Select aria-label="Default select example">
                                                    <option value="pending">{userPlan.status}</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Complete">Complete</option>
                                                </Form.Select>
                                            </td>
                                            <td>
                                                <button onClick={() => handleDeletePlan(userPlan._id)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>)
                                }


                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllPlans;