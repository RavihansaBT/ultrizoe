import React from 'react'
import LogoComponent from '../components/LogoComponent';
import FormComponent from '../components/FormComponent';
import { Col, Row } from 'reactstrap';


import './addinfo.css'

function addInfo() {
    return (
        <div>
            <Row>
                <Col>
                    <LogoComponent />
                </Col>
                <Col>
                    <FormComponent />
                </Col>
            </Row>
        </div>
    )
}

export default addInfo
