import React, { useState } from "react"
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { URL } from '../settings';

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

const AddUser = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [userCreated, setUserCreated] = useState('');

  const perfomAddUser = (evt) => {
    evt.preventDefault();

    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: document.getElementById("userName").value,
        password: document.getElementById("userPassword").value
      })
    };

    fetch(URL + "/api/users", options)
      .then(handleHttpErrors)
      .then(res => {
        setErrorMessage('');
        setUserCreated('created');
        console.log("User added");
      }).catch((error) => {
        error.fullError.then((err) => {
          setErrorMessage(err.message)
          console.log("error: ", err)
        })
      });

    
  };
  
  console.log("err: " + errorMessage)
  console.log("userCreated: "+ userCreated)

  return (
    <div className="font-link">
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <h2 className="ca3White">Opret bruger</h2>
            <Form className="mt-4">
              <Form.Group controlId="userName">
                {(userCreated === 'created') 
                  ? <div class="alert alert-success" role="alert">Du har oprettet en bruger. Login foroven</div>
                  : ('')}
                <Form.Label className="ca3White">Brugernavn</Form.Label>
                <Form.Control type="text" placeholder="Indtast brugernavn" />
              </Form.Group>
              <Form.Group controlId="userPassword">
                <Form.Label className="ca3White">Kodeord</Form.Label>
                <Form.Control type="password" placeholder="Indtast kodeord" />
              </Form.Group>
              <Button onClick={perfomAddUser} variant="primary" type="submit">
                Godkend
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col><p className="mt-4 text-danger">{errorMessage}</p></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddUser;