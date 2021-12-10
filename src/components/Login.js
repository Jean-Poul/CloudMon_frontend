import React, { useState, useEffect } from "react"
import facade from "./apiFacade";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import AddUser from "./AddUser";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
  }

  return (
    <div className="font-link">
      <Container>
        <Row>
          <Col>
          </Col>
          <Col>
            <h2>Log ind</h2>
            <Form onChange={onChange} className="mt-4">
              <Form.Group controlId="loginForm">
                <Form.Label>Brugernavn</Form.Label>
                <Form.Control type="text" id="username" placeholder="Enter username" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Kodeord</Form.Label>
                <Form.Control type="password" id="password" placeholder="Enter password" />
              </Form.Group>
              <Button onClick={performLogin} variant="primary" type="submit">
                Log ind
              </Button>
            </Form>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  )

}

function LoggedIn() {

  function parseJwt(token) {
    let tokenDecoded = JSON.parse(atob(token.split('.')[1]));
    return tokenDecoded.roles.split(',')[0];
  }

  const [dataFromServer, setDataFromServer] = useState("Loading...")
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let role = parseJwt(facade.getToken());
    console.log(role);
    console.log(role.data);
    facade.fetchData(role).then(data => console.log(setDataFromServer(data.msg)))
      .catch((error) => {
        error.fullError.then((err) => {
          setErrorMessage(err.message);
          console.log("error: ", err);
        })
      }
      )
  }, [])

  return (
    <div>
      <h2>{dataFromServer}</h2>
      <p>{errorMessage}</p>
    </div>
  )

}

function Login({ setLoginStatus, isLoggedIn, setAdminStatus }) {

  let header = document.getElementById("header");

  const parseJwt = (token) => {
    let tokenDecoded = JSON.parse(atob(token.split('.')[1]));
    return tokenDecoded.roles.split(',')[0];
  }

  function parseJwtName(name) {
    let tokenName = JSON.parse(atob(name.split('.')[1]));
    return tokenName.username;
  }

  const [errorMessage, setErrorMessage] = useState('')

  const logout = () => {
    facade.logout()
    setLoginStatus(false)
    setAdminStatus(false)
  }

  const login = (user, pass) => {
    facade.login(user, pass)
      .then((res) => {
        setErrorMessage('')
        let name = parseJwtName(facade.getToken());
        setLoginStatus(true, name)

        if (parseJwt(facade.getToken()) === "admin") {
          setAdminStatus(true)
        }

      }).catch((error) => {
        error.fullError.then((err) => {
          setErrorMessage(err.message)
          console.log("error: ", err)
        })
      });
  };



  return (
    <div className="font-link">
      <div className="pagesMove">
        <div className="pageContent">
          <Container>
            <Row>
              <Col>
                {!isLoggedIn ? (
                  <>
                    <LogIn login={login} />
                    <p>{errorMessage}</p>
                    <br />
                    <AddUser />
                  </>
                ) :
                  (<div className="alertLogout">
                    <div class="alert alert-danger" role="alert">
                      <h4 class="alert-heading"><LoggedIn /></h4>
                      <p>Er du sikker på at du vil logge ud af CloudMon?</p>
                      <hr></hr>
                      <Form>
                        <Button variant="danger" onClick={logout}>Log ud</Button>
                      </Form>
                    </div>

                  </div>)}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )

}

export default Login;

