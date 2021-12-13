import GovCloud from '../images/GovCloud-512x512.png'
import { Container, Row, Col, Button, InputGroup, FormControl, Table, Form } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

const Velkommen = () => {

    return (
        <div className="font-link" style={{ position: 'absolute', left: '50%', top: '15%', transform: 'translate(-50%, -50%)' }}>
            {/* <img src={GovCloud} fluid /> */}
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


    )

}

export default Velkommen;