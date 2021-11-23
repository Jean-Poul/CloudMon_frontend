import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Table, Form } from "react-bootstrap";
import {
    URLNamespaces,
    URLDeployments,
    URLServices,
    URLPods
} from "../settings";

import "react-bootstrap";

const AllServices = () => {
    // const init = { QuoteNum: "" }
    const [num, setNum] = useState([]);

    const [info, setInfo] = useState([]);
    console.log(info);
    const fetchService = () => {
        fetch(URLServices)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
            });
    };

    const getServices = (evt) => {
        evt.preventDefault();
        fetchService();
    };

    useEffect(() => {
        fetchService();
    }, []);

    const onChange = (evt) => {
        evt.preventDefault();
        const num = evt.target.value;
        setNum(num);
    };

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
                                    <th>Type</th>
                                    <th>Cluster IP</th>
                                    <th>External IP</th>
                                    <th>Port</th>
                                    <th>Age</th>
                                    <th>Selector</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    info.all && info.all.map(data => {
                                        return (
                                            <tr>
                                                <td>{data.namespace}</td>
                                                <td>{data.name}</td>
                                                <td>{data.type}</td>
                                                <td>{data.clusterip}</td>
                                                <td>{data.externalip}</td>
                                                <td>{data.port}</td>
                                                <td>{data.age}</td>
                                                <td>{data.selector}</td>
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
export default AllServices