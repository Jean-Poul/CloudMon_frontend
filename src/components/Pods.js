import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Table, Form } from "react-bootstrap";
import {
    URLNamespaces,
    URLDeployments,
    URLServices,
    URLPods
} from "../settings";

const AllPods = () => {

    const [info, setInfo] = useState([]);
    console.log(info);
    const fetchPod = () => {
        fetch(URLPods)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
            });
    };

    const getPod = (evt) => {
        evt.preventDefault();
        fetchPod();
    };

    useEffect(() => {
        fetchPod();
    }, []);

    return (
        <div className="pagesMove">
            <Container>
                <h2>GovCloud: Services</h2>
                <Row className="mt-4">
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Namespace</th>
                                    <th>Name</th>
                                    <th>Ready</th>
                                    <th>Status</th>
                                    <th>Restarts</th>
                                    <th>Age</th>
                                    <th>IP</th>
                                    <th>Node</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    info.all && info.all.map(data => {
                                        return (
                                            <tr>
                                                <td>{data.namespace}</td>
                                                <td>{data.name}</td>
                                                <td>{data.ready}</td>
                                                <td>{data.status}</td>
                                                <td>{data.restarts}</td>
                                                <td>{data.age}</td>
                                                <td>{data.ip}</td>
                                                <td>{data.node}</td>
                                            </tr>
                                        )
                                    }
                                    )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AllPods;