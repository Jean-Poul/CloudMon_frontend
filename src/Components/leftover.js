import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Table, Form } from "react-bootstrap";
import { URLQuotes, URLNamespace } from "../settings";
import logo from './bBad.jpeg';

const AllQuotes = () => {

    const init = { QuoteNum: "" }
    const [quotes, setQuotes] = useState([]);
    const [num, setNum] = useState([]);

    const [info, setInfo] = useState([]);

    const fetchNamespace = () => {
        fetch(URLNamespace)
            .then(res => res.json())
            .then(data => {
                setInfo(data);
            })

           
    }
    

    const getNamespaces = (evt) => {
        evt.preventDefault();
        fetchNamespace();
    };














    const fetchRandomQuote = () => {
        fetch(URLQuotes)
            .then(res => res.json())
            .then(data => {
                setQuotes(data);
            })
    }
    

    //loads random quote first time
    useEffect(() => {
  //   fetchNamespace();
     fetchRandomQuote();
    }, []);

    const fetchQuote = () => {
        const URL = URLQuotes + "/" + num;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
               
                setQuotes(data);
            });
    };

    const getNumberOfQuotes = (evt) => {
        evt.preventDefault();
        fetchQuote();
    };

    const onChange = (evt) => {
        evt.preventDefault();
        const num = evt.target.value;
        setNum(num);
    };

    return (
        <div>

            <Container>

            <Row className="mt-4">
                    <Col>
                    {(typeof info.all != "undefined") ? (
                        <Table striped bordered hover>
                        
                        
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>STATUS</th>
                                    <th>AGE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    info.map(element => {
                                        return (
                                            <tr key={element.id}>
                                                <td >{element}</td>
                                                <td>{element}</td>
                                                <td>{element}</td>
                                            </tr>
                                        )
                                    }
                                    )
                                    }
                            </tbody>
                            

                        </Table>
                        ) : ('') }
                    </Col> 
                </Row>

                <Row> 
                    <Col>
                        <Form onChange={onChange} className="mt-4" label="">
                            <Form.Control
                                type="text"
                                id="NsNumber"
                                placeholder="Input number of namespaces you want"
                            />
                            <Button onClick={getNamespaces} variant="primary" type="submit">
                                Get namespaces
                            </Button>
                        </Form>
                    </Col>
                </Row>


                <h2>Quotes from Breaking Bad</h2>
                <Row className="mt-4">
                    <img src={logo} />
                </Row>
                <Row className="mt-4">
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Author</th>
                                    <th>Quote</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    quotes.map(element => {
                                        return (
                                            <tr>
                                                <td>{element.author}</td>
                                                <td>{element.quote}</td>
                                            </tr>
                                        )
                                    }
                                    )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onChange={onChange} className="mt-4" label="">
                            <Form.Control
                                type="text"
                                id="QuoteNum"
                                placeholder="Input number of quotes you want"
                            />
                            <Button onClick={getNumberOfQuotes} variant="primary" type="submit">
                                Get quotes
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}


export default AllQuotes;