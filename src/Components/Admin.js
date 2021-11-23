import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import //   Container,
//   Row,
//   Col,
//   Button
//   InputGroup,
//   FormControl,
//   Table,
//   Form
"react-bootstrap";

import {
  URLNamespaces,
  URLDeployments,
  URLServices,
  URLPods
} from "../settings";

// import logo from './bBad.jpeg';

export const Kubernetes = () => {
  return (
    <div>
      <div>
        <h2>Find information omkring nedenstående emner</h2>
        <br />
        <Link to="/namespaces">Go to Namespaces</Link>
        <br />
        <Link to="/deployments">Go to Deployments</Link>
        <br />
        <Link to="/services">Go to Services</Link>
        <br />
        <Link to="/pods">Go to Pods</Link>
        <br />
      </div>
    </div>
  );
};

export const AllNamespaces = () => {
  // const init = { QuoteNum: "" }
  const [num, setNum] = useState([]);

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

  const onChange = (evt) => {
    evt.preventDefault();
    const num = evt.target.value;
    setNum(num);
  };

  return (
    <div>
      <div>
        <br />
        <Link to="/namespaces">Go to Namespaces</Link>
        <br />
        <Link to="/deployments">Go to Deployments</Link>
        <br />
        <Link to="/services">Go to Services</Link>
        <br />
        <Link to="/pods">Go to Pods</Link>
        <br />
        {typeof info.all != "undefined" ? (
          <div className="namespace-box">
            <div>GovCloud: Namespaces</div>
            <br />

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {info.all.map((data) => (
                  <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.status}</td>
                    <td>{data.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          fetchNamespace()
        )}
      </div>
    </div>
  );
};

export default AllNamespaces;

export const AllDeployments = () => {
  // const init = { QuoteNum: "" }
  const [num, setNum] = useState([]);

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

  const onChange = (evt) => {
    evt.preventDefault();
    const num = evt.target.value;
    setNum(num);
  };

  return (
    <div>
      <div>
        <br />
        <Link to="/namespaces">Go to Namespaces</Link>
        <br />
        <Link to="/deployments">Go to Deployments</Link>
        <br />
        <Link to="/services">Go to Services</Link>
        <br />
        <Link to="/pods">Go to Pods</Link>
        <br />
        {typeof info.all != "undefined" ? (
          <div className="deployment-box">
            <div>GovCloud: Deployments</div>
            <br />

            <table>
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
                {info.all.map((data) => (
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
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          fetchDeployment()
        )}
      </div>
    </div>
  );
};

export const AllServices = () => {
  // const init = { QuoteNum: "" }
  const [num, setNum] = useState([]);

  const [info, setInfo] = useState([]);
  console.log(info);
  const fetchService = () => {
    fetch(URLServices)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  };

  const getServices = (evt) => {
    evt.preventDefault();
    fetchService();
  };

  useEffect(() => {
    fetchService();
  }, []);

  const onChange = (evt) => {
    evt.preventDefault();
    const num = evt.target.value;
    setNum(num);
  };

  return (
    <div>
      <div>
        <br />
        <Link to="/namespaces">Go to Namespaces</Link>
        <br />
        <Link to="/deployments">Go to Deployments</Link>
        <br />
        <Link to="/services">Go to Services</Link>
        <br />
        <Link to="/pods">Go to Pods</Link>
        <br />
        {typeof info.all != "undefined" ? (
          <div className="service-box">
            <div>GovCloud: Services</div>
            <br />

            <table>
              <thead>
                <tr>
                  <th>Namespace</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Cluster IP</th>
                  <th>External IP</th>
                  <th>Port</th>
                  <th>Age</th>
                  <th>Selector</th>
                </tr>
              </thead>
              <tbody>
                {info.all.map((data) => (
                  <tr key={data.id}>
                    <td>{data.namespace}</td>
                    <td>{data.name}</td>
                    <td>{data.type}</td>
                    <td>{data.clusterip}</td>
                    <td>{data.externalip}</td>
                    <td>{data.port}</td>
                    <td>{data.age}</td>
                    <td>{data.selector}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          fetchService()
        )}
      </div>
    </div>
  );
};

export const AllPods = () => {
  // const init = { QuoteNum: "" }
  const [num, setNum] = useState([]);

  const [info, setInfo] = useState([]);
  console.log(info);
  const fetchPod = () => {
    fetch(URLPods)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  };

  const getPod = (evt) => {
    evt.preventDefault();
    fetchPod();
  };

  useEffect(() => {
    fetchPod();
  }, []);

  const onChange = (evt) => {
    evt.preventDefault();
    const num = evt.target.value;
    setNum(num);
  };

  return (
    <div>
      <div>
        <br />
        <Link to="/namespaces">Go to Namespaces</Link>
        <br />
        <Link to="/deployments">Go to Deployments</Link>
        <br />
        <Link to="/services">Go to Services</Link>
        <br />
        <Link to="/pods">Go to Pods</Link>
        <br />
        {typeof info.all != "undefined" ? (
          <div className="pod-box">
            <div>GovCloud: Pods</div>
            <br />

            <table>
              <thead>
                <tr>
                  <th>Namespace</th>
                  <th>Name</th>
                  <th>Ready</th>
                  <th>Status</th>
                  <th>Restarts</th>
                  <th>Age</th>
                  <th>IP</th>
                  <th>Node</th>
                </tr>
              </thead>
              <tbody>
                {info.all.map((data) => (
                  <tr key={data.id}>
                    <td>{data.namespace}</td>
                    <td>{data.name}</td>
                    <td>{data.ready}</td>
                    <td>{data.status}</td>
                    <td>{data.restarts}</td>
                    <td>{data.age}</td>
                    <td>{data.ip}</td>
                    <td>{data.node}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          fetchPod()
        )}
      </div>
    </div>
  );
};
