import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Table, Form } from "react-bootstrap";
import {
    URLApps
} from "../settings";

const Applikationer = () => {

        const [info, setInfo] = useState([]);
        const fetchPod = () => {
            fetch(URLApps)
                .then((res) => res.json())
                .then((data) => {
                    setInfo(data);
                });
        };
    

        const getApps = (evt) => {
            evt.preventDefault();
            fetchPod();
        };
    

        useEffect(() => {
            fetchPod();
        }, []);
    

    return (
        <div className="pagesMove">
            <Container>
                <h2>GovCloud: Applikationer</h2>
                Her kan du se et overblik over Applikationerne samt hvor de er installeret i GovCloud
                <Row className="mt-4">
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Version</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    info.all && info.all.map(data => {
                                        return (
                                            <tr>
                                                <td>{data.id}</td>
                                                <td>{data.name}</td>
                                                <td>{data.version}</td>
                                                <td>{data.location}</td>
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
    )

}

export default Applikationer;