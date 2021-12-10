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

    /////////////////////-Handles request generically-///////////////////////////
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

    /////////////////////-Handles changes when user types in indput field-///////////////////////////
    const handleChange = (event) => {
        const target = event.target;
        const id = target.id;
        const value = target.value;
        setApp({ ...app, [id]: value });
        console.log("from change " + id);
    };

    /////////////////////-Fetches all apps-///////////////////////////
    const fetchApps = () => {
        fetch(URLApps + "all")
            .then((res) => res.json())
            .then((data) => {
                setAllApp(data);
            });
    };

    /////////////////////-Fetches all apps when loading the page-///////////////////////////
    useEffect(() => {
        fetchApps();
    }, []);

    /////////////////////-Handles adding an app-///////////////////////////
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

    /////////////////////-Handles update on app-///////////////////////////
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

    /////////////////////-Handles delete on app-///////////////////////////
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

    /////////////////////-Handles getting an app to fill out form with data-///////////////////////////
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

    /////////////////////-contains all functionality in appForm for adding and updating app-///////////////////////////
    const appForm = () => {
        return (
            <div>
                <h4>Tilføj / Opdater en applikation</h4>
                <Form onSubmit={handleSubmit} >
                    <Form.Group controlId="name">
                        <Form.Label>App Navn</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Navn"
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
                        <Form.Label>App Lokation</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Lokation"
                            value={app.location}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
                <Button variant="success" onClick={() => addApp(app)}>Tilføj</Button> 
                <Button variant="primary" onClick={() => updateApp(app)}>Opdater</Button>
            </div>
        );
    };

    /////////////////////-Returning Apllikationer-///////////////////////////
    return (
        <div className="font-link">
            <div className="pagesMove">
                <div>
                    <Container>
                        <h2>GovCloud: Applikationer</h2>
                        Her kan du se et overblik over Applikationerne samt hvor de er installeret i GovCloud.
                        Derudover har du mulighed for at tilføje, slette eller redigere applikationer.
                        <Row className="mt-4">
                            <Col>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Navn</th>
                                            <th>Version</th>
                                            <th>Lokation</th>
                                            <th colSpan="2">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allApp.all && allApp.all.map((element) => {
                                            return (
                                                <tr key={element.id}>
                                                    <td>{element.name}</td>
                                                    <td>{element.version}</td>
                                                    <td>{element.location}</td>
                                                    <td>
                                                        <Button onClick={() => getApp(element.id)}>
                                                            Rediger
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
        </div>
    )

}

export default Applikationer;