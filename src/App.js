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
import AllNamespaces from "./components/Namespaces";
import AllServices from "./components/Services";
import Kubernetes from "./components/Kubernetes";
import Infrastruktur from "./components/Infrastruktur";
import Applikationer from "./components/Applikationer";


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

        <div className="htext3">
          <NavLink exact activeClassName="selected" href="/" to="/kubernetes">
            Kubernetes
          </NavLink>
        </div>

        <div className="htext4">
          <NavLink exact activeClassName="selected" href="/" to="/applikationer">
            Applikationer
          </NavLink>
        </div>

        <div className="htext5">
          <NavLink exact activeClassName="selected" href="/" to="/infrastruktur">
            Infrastruktur
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
                    <NavLink className="nav-link" activeClassName="selected" to="/namespaces">
                      <GiPlainCircle /> Namespaces
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

          <Route path="/kubernetes">
            <Kubernetes />
          </Route>

          <Route path="/applikationer">
            <Applikationer />
          </Route>

          <Route path="/infrastruktur">
            <Infrastruktur />
          </Route>

          <Route path="/pods">
            <AllPods />
          </Route>

          <Route path="/deployments">
            <AllDeployments />
          </Route>

          <Route path="/namespaces">
            <AllNamespaces />
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