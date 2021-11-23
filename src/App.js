import React, { useState } from "react";
import "./style2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Login from "./components/Login";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import Velkommen from "./components/Velkommen";
import GovCloud from './images/GovCloud-192x192.png'
import { GiHamburgerMenu, GiCircle, GiHouse, GiPlainCircle } from 'react-icons/gi'
import AllPods from "./components/Pods";
import AllDeployments from "./components/Deployments";
import AllNodes from "./components/Nodes";
import AllServices from "./components/Services";


const Header = ({ isLoggedIn, loginMsg, isAdmin, loginName }) => {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        {/* <img className="logo" src={GovCloud} alt="GovCloud" /> */}

        <div className="htext">
          <NavLink exact activeClassName="selected" href="/" to="/">
            <GiHouse />Home
          </NavLink>
        </div>
        <div className="htext2">
          <NavLink className="nav-link" activeClassName="selected" to="/login-out">
            {loginMsg}
          </NavLink>
        </div>
      </header>

      {showNav &&

        <div className="sidenav active">
          <Nav fixed="left" bg="dark" variant="dark" id="header">
            <img className="logo" src={GovCloud} alt="GovCloud" />
            <Nav className="flex-column">
              {isAdmin && (
                <>
                  <li>
                    <NavLink className="nav-link" activeClassName="selected" to="/pods">
                      <GiPlainCircle /> Pods
                    </NavLink>
                    <NavLink className="nav-link" activeClassName="selected" to="/deployments">
                      <GiPlainCircle /> Deployments
                    </NavLink>
                    <NavLink className="nav-link" activeClassName="selected" to="/nodes">
                      <GiPlainCircle /> Nodes
                    </NavLink>
                    <NavLink className="nav-link" activeClassName="selected" to="/Services">
                      <GiPlainCircle /> Services
                    </NavLink>
                  </li>
                </>)}
              {isLoggedIn && (
                <>
                  <li className="status">
                    <div class="alert alert-warning" role="alert">
                      <span className="loginStatus">You are logged in as {loginName}
                      </span>
                    </div>
                  </li>
                </>
              )}
            </Nav>
          </Nav>
        </div>

      }
    </>
  );
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginName, setLoginName] = useState('');

  let history = useHistory();

  const setLoginStatus = (status, name) => {
    setIsLoggedIn(status);
    setLoginName(name);
    history.push("/");
  };

  const setAdminStatus = (status) => {
    setIsAdmin(status);
    history.push("/");
  };

  return (
    <div>
      <Header
        loginMsg={isLoggedIn ? "Logout" : "Login"}
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        loginName={isLoggedIn ? loginName : ''}
      />

      <div className="content">
        <Switch>
          <Route exact path="/">
            <Velkommen />
          </Route>

          <Route path="/pods">
            <AllPods />
          </Route>

          <Route path="/deployments">
            <AllDeployments />
          </Route>

          <Route path="/nodes">
            <AllNodes />
          </Route>

          <Route path="/services">
            <AllServices />
          </Route>

          <Route path="/login-out">
            <Login
              loginMsg={isLoggedIn ? "Logout" : "Login"}
              isLoggedIn={isLoggedIn}
              setLoginStatus={setLoginStatus}
              setAdminStatus={setAdminStatus}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

// You can think of these components as "pages" in your app.
/* function Home() {
  return (
    <div className="pageContent">
      
    </div>
  );
}

function Pods() {
  return (
    <div className="pageContent">

    </div>
  );
}

function Deployments() {
  return (
    <div className="pageContent">

    </div>
  );
}

function Nodes() {
  return (
    <div className="pageContent">

    </div>
  );
}

function Services() {
  return (
    <div className="pageContent">

    </div>
  );
} */