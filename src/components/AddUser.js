import React, { useState } from "react"
import { useForm } from "react-hook-form";
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

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (evt) => {
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
          reset();
          console.log("User added");
        })
        .catch((error) => {
          error.fullError.then((err) => {
            setErrorMessage(err.message);
            console.log("error: ", err)
          });
        });
    };
 

    console.log("err: " + errorMessage)
    console.log("userCreated: " + userCreated)

    return (
      <div className="font-link">
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <h2 className="ca3White">Opret bruger</h2>
              <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="userName">
                  {userCreated === "created" ? (
                    <div class="alert alert-success" role="alert">Du har oprettet en bruger. Login foroven</div>
                    ) : (
                      ""
                    )}
                  <Form.Label className="ca3White">Brugernavn</Form.Label>
                  <Form.Control type="text" placeholder="Indtast brugernavn" {...register("username", { required: "This is required", minLength: { value: 2, message: 'Minimum 2 character' }, maxLength: { value: 20, message: 'Maximum 20 character' }, pattern: { value: /^[a-zA-Z0-9_-]*$/, message: 'No special characters allowed' } })} />
                  {errors.username && <p className="text-danger">{errors.username.message}</p>}
                </Form.Group>
                <Form.Group controlId="userPassword">
                  <Form.Label className="ca3White">Kodeord</Form.Label>
                  <Form.Control type="password" placeholder="Indtast kodeord" {...register("password", { required: "This is required", minLength: { value: 6, message: 'Minimum 6 character' }, pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{6,}/, message: 'Minimum 6 characters, at least one uppercase letter, one lowercase letter, one number and one special character' } })}/>
                  {errors.password && <p className="text-danger">{errors.password.message}</p>}
                </Form.Group>
                <Button variant="primary" type="submit">
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

  export default AddUser