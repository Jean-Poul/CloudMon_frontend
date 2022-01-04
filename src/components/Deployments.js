import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Table, Form } from "react-bootstrap";

import {
  URLNamespaces,
  URLDeployments,
  URLServices,
  URLPods
} from "../settings";

const AllDeployments = () => {

  const [info, setInfo] = useState([]);
  console.log(info);
  const fetchDeployment = () => {
    fetch(URLDeployments)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  };

  const getDeployments = (evt) => {
    evt.preventDefault();
    fetchDeployment();
  };

  useEffect(() => {
    fetchDeployment();
  }, []);

  return (
    <div className="font-link">
        <Container style={{width: '100%', height: '750px', marginLeft: '240px', overflowY: 'auto'}}>
          <h2>GovCloud: Deployments</h2>
          <Row className="mt-4">
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Namespace</th>
                    <th>Name</th>
                    <th>Ready</th>
                    <th>Up to date</th>
                    <th>Available</th>
                    <th>Age</th>
                    <th>Containers</th>
                    <th>Images</th>
                    <th>Selector</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    info.all && info.all.map(data => {
                      return (
                        <tr key={data.id}>
                          <td>{data.namespace}</td>
                          <td>{data.name}</td>
                          <td>{data.ready}</td>
                          <td>{data.uptodate}</td>
                          <td>{data.available}</td>
                          <td>{data.age}</td>
                          <td>{data.containers}</td>
                          <td>{data.images}</td>
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
export default AllDeployments