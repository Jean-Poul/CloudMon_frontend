import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Table, Form } from "react-bootstrap";
import {
    URLApps,
    URLAppsUpdate,
    URLAppsDelete
} from "../settings";

const Applikationer = () => {
    const initialValues = {
        id: "",
        name: "",
        version: "",
        location: ""
    };

    const [allApp, setAllApp] = useState([]);
    const [app, setApp] = useState(initialValues);

    ////////////////////////////////////////////////

    function makeOptions(method, body) {
        const opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                Accept: "application/json"
            }
        };
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + app.id);
        event.preventDefault();
        updateApp(app);
        console.log("from submit " + app);
    };

    const handleChange = (event) => {
        const target = event.target;
        const id = target.id;
        const value = target.value;
        setApp({ ...app, [id]: value });
        console.log("from change " + id);
        console.log()
    };

    ////////////////////////////////////////////////
    const fetchApps = () => {
        fetch(URLApps + "all")
            .then((res) => res.json())
            .then((data) => {
                setAllApp(data);
            });
    };


    /*     const getApps = (evt) => {
            evt.preventDefault();
            fetchApps();
        }; */


    useEffect(() => {
        fetchApps();
    }, []);
    ////////////////////////////////////////////////

    const addApp = () => {
        const options = makeOptions("POST", app);

        fetch(URLApps, options)
            .then((res) => res.json())
            .then((res) => fetchApps())
            .catch((err) => {
                if (err.status) {
                    err.fullError.then((e) => console.log(e.detail));
                } else {
                    console.log("Network error");
                }
            });
    };

    ////////////////////////////////////////////////

    const updateApp = (app) => {
        const options = makeOptions("PUT", app);

        fetch(URLAppsUpdate + app.id, options)
            .then((res) => fetchApps())
            .then(reset => setApp(initialValues))
            .catch((err) => {
                if (err.status) {
                    err.fullError.then((e) => console.log(e.detail));
                } else {
                    console.log("Network error" + err);
                }
            });
    };

    ////////////////////////////////////////////////


    const deleteApp = (id) => {
        const options = makeOptions("DELETE");

        fetch(URLAppsDelete + id, options)
            .then((res) => res.json())
            .then((data) => {
                setAllApp(data);
                fetchApps();
            })
            .catch((err) => {
                if (err.status) {
                    err.fullError.then((e) => console.log(e.detail));
                } else {
                    console.log("Network error");
                }
            });
    };

    ////////////////////////////////////////////////

    const getApp = (appId) => {
        fetch(URLApps + appId)
            .then((res) => res.json())
            .then((data) => {
                setApp(data);
                console.log(data);
            })
            .catch((err) => {
                if (err.status) {
                    err.fullError.then((e) => console.log(e.detail));
                } else {
                    console.log("Network error");
                }
            });
    };

    ////////////////////////////////////////////////

    const appForm = () => {
        return (
            <div>
                <h4>Tilføj eller opdater en applikation</h4>
                <Form onSubmit={handleSubmit} >
                    <Form.Group controlId="name">
                        <Form.Label>App Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={app.name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="version">
                        <Form.Label>App version</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Version"
                            value={app.version}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="location">
                        <Form.Label>App Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Location"
                            value={app.location}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>

                <Button variant="success" onClick={() => addApp()}>Tilføj</Button>

                <Button variant="primary" value={app.id} onClick={() => updateApp(app)}>Opdater</Button>

            </div>
        );
    };

    ////////////////////////////////////////////////


    return (
        <div className="pagesMove">
            <div>
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
                                        <th colSpan="2">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allApp.all && allApp.all.map((element) => {
                                        return (
                                            <tr key={element.id}>
                                                <td>{element.id}</td>
                                                <td>{element.name}</td>
                                                <td>{element.version}</td>
                                                <td>{element.location}</td>
                                                <td>
                                                    <Button onClick={() => getApp(element.id)}>
                                                        Hent data
                                                    </Button>
                                                </td>
                                                <td>
                                                    <Button variant="danger" onClick={() => deleteApp(element.id)}>
                                                        Slet
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>

                        </Col>
                    </Row>
                    {appForm()}
                </Container>
            </div>
        </div>


    )

}

export default Applikationer;