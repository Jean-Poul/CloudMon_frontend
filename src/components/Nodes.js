import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Table, Form } from "react-bootstrap";

const AllNodes = () => {

    return (
        <div div className="pagesMove">

            <Container>
            <h1>Nodes : Data</h1>
            <br/>
                <Row className="mt-4">
                    <Col>
                        <h4>TABLENAME</h4>
                        <p><a>data</a></p>
                        <p></p>
                    </Col>
                    <Col>
                        <h4>TABLENAME</h4>
                        <p><a>data</a></p>
                        <p></p>
                    </Col>
                    <Col>
                        <h4>TABLENAME</h4>
                        <p><a>data</a></p>
                        <p></p>
                    </Col>
                    <Col>
                        <h4>TABLENAME</h4>
                        <p><a>data</a></p>
                        <p></p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default AllNodes;