import React, { useState, useEffect } from "react";
import "./style.css";
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
import Komponenter from "./components/Komponenter";
import Govcloud from "./components/Govcloud";
import { URLUser } from "./settings"


const Header = ({ isLoggedIn, loginMsg, isAdmin, loginName }) => {

  const [showNav, setShowNav] = useState(true)
  const [showFileData, setFileData] = useState(false)
  const [showInf, setShowInf] = useState(false)


  ////////////////////////////////////////////////////
  const [info, setInfo] = useState([]);
  
  const fetchUser = () => {
    fetch(URLUser + loginName)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.lastLoginTime);
      });
  };
  ////////////////////////////////////////////////////

  //Changes background color
  document.body.style = 'background: #E8E9EB;';

  return (
    <>
      <header className="font-link" >
        {/* <div className={showNav ? "sidenav show" : "sidenav"}></div> */}
        <GiHamburgerMenu className="sidenavBurger" onClick={() => setShowNav(!showNav)} />

        <div className="htext">
          <NavLink style={{ color: "dodgerblue" }} exact activeClassName="selected" href="/" to="/" onClick={() => { setFileData(false); setShowInf(false) }}>
            Hjem
          </NavLink>
        </div>

        <div className="htext2">
          <NavLink style={{ color: "dodgerblue" }} className="nav-link" activeClassName="selected" to="/login-out" onClick={() => { setFileData(false); setShowInf(false) }}>
            {loginMsg}
          </NavLink>
        </div>

        {isLoggedIn && (
          <>
            <div className="htext3">
              <NavLink style={{ color: "dodgerblue" }} exact activeClassName="selected" href="/" to="/kubernetes" onClick={() => { setFileData(true); setShowInf(false) }}>
                Kubernetes
              </NavLink>

            </div>

            <div className="htext4">
              <NavLink style={{ color: "dodgerblue" }} exact activeClassName="selected" href="/" to="/applikationer" onClick={() => { setFileData(false); setShowInf(false) }}>
                Applikationer
              </NavLink>
            </div>

            <div className="htext5">
              <NavLink style={{ color: "dodgerblue" }} exact activeClassName="selected" href="/" to="/infrastruktur" onClick={() => { setFileData(false); setShowInf(true) }}>
                Infrastruktur
              </NavLink>
            </div>
          </>
        )}
      </header>

      <div className={showNav ? "sidenav active" : "sidenav"}>
      {showNav &&
        <div className="font-link">
            <div className="sidenav active">
              
              
              <Nav fixed="left" bg="dark" variant="dark" id="header">
                <img className="logo" src={GovCloud} alt="GovCloud" />

                {isLoggedIn && (
                  <>
                    <div className="status">
                      <div class="alert alert-info" role="alert">
                        <h5 className="alertHeading">Brugerinformation:</h5>
                        <hr />
                        <h6 className="alertHeading">Logget ind som: </h6>
                        <p className="loginStatus">{loginName}</p>
                        <hr />
                        <h6 className="alertHeading">Sidste login: </h6>
                        <p className="loginStatus">
                          {fetchUser(loginName)}{info}</p>
                        <hr />
                        <h6 className="alertHeading">Rettigheder: </h6>
                        <p className="loginStatus">{isAdmin ? (<div>Admin</div>) : (<div>User</div>)}</p>
                      </div>
                    </div>
                  </>
                )}

                  {isAdmin && (
                <Nav className="flex-column">
                  {showFileData && (
                    <>
                      <li>
                        <div className="filedata active">
                          <NavLink className="nav-link" activeClassName="selected" to="/pods">
                            Pods
                          </NavLink>
                          <NavLink className="nav-link" activeClassName="selected" to="/deployments">
                            Deployments
                          </NavLink>
                          <NavLink className="nav-link" activeClassName="selected" to="/namespaces">
                            Namespaces
                          </NavLink>
                          <NavLink className="nav-link" activeClassName="selected" to="/services">
                            Services
                          </NavLink>
                        </div>
                      </li>
                    </>)}
                </Nav>
                )}

                <Nav className="flex-column">
                  {isAdmin, showInf && (
                    <>
                      <li>
                        <div className="filedata active">
                          <NavLink className="nav-link" activeClassName="selected" to="/komponenter">
                            Komponenter
                          </NavLink>
                          <NavLink className="nav-link" activeClassName="selected" to="/govcloud">
                            Elementer og dependencies
                          </NavLink>
                        </div>
                      </li>
                    </>)}
                </Nav>
              </Nav>

            
            
            </div>
          </div>

      }
      </div>
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
        loginMsg={isLoggedIn ? "Log ud" : "Log ind"}
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

          <Route path="/komponenter">
            <Komponenter />
          </Route>

          <Route path="/govcloud">
            <Govcloud />
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