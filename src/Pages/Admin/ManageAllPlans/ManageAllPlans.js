import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const ManageAllPlans = () => {
    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Col>
                        <h2>This is Manage All Plans page</h2>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllPlans;