import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Table, Form } from "react-bootstrap";
import {
  URLNamespaces,
  URLDeployments,
  URLServices,
  URLPods
} from "../settings";

const AllNamespaces = () => {

  const [info, setInfo] = useState([]);
  console.log(info);
  const fetchNamespace = () => {
    fetch(URLNamespaces)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  };

  const getNamespaces = (evt) => {
    evt.preventDefault();
    fetchNamespace();
  };

  useEffect(() => {
    fetchNamespace();
  }, []);

  return (
    <div className="font-link">
      <div className="pagesMove">

        <Container>
          <h2>GovCloud: Namespaces</h2>
          <Row className="mt-4">
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    info.all && info.all.map(data => {
                      return (
                        <tr key={data.id}>
                          <td>{data.name}</td>
                          <td>{data.status}</td>
                          <td>{data.age}</td>
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
    </div>

  );
};

export default AllNamespaces;