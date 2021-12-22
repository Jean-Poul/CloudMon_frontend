import GovCloud from '../images/GovCloud-512x512.png'
import { Container, Row, Col, Button, InputGroup, FormControl, Table, Form } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

const Velkommen = () => {

    return (
        <div className="font-link">
            {/* <img src={GovCloud} fluid /> */}
            <div className="pageContent">
            <div className="textMove">
                <h1>
                    Velkommen til CloudMon
                </h1>
                <h4>
                    En monitoreringsside til overvågning af kubernetes cluster
                </h4>
                <div>
                    Brug hovedmenuerne i toppen af siden til at navigere rundt
                </div>
            </div>
        </div>
        </div>


    )

}

export default Velkommen;