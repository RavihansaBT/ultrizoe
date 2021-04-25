import React, { useState } from 'react'
import { Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input } from 'reactstrap'
import { addInfo } from "../service/contact.js";
import { countries } from "../assets/country";

import './FormComponent.css'
import { withRouter } from 'react-router-dom';

const genderTypes = [
    "Select Gender", "Male", "Female"
]

function FormComponent(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
    const [gender, setgender] = useState(0)
    const [country, setCountry] = useState(null)
    const [contactNo, setContactNo] = useState("")

    const GenderToggle = () => setDropdownOpen(prevState => !prevState);
    const Countryoggle = () => setCountryDropdownOpen(prevState => !prevState);

    const createInfo = async (e) => {
        e.preventDefault()
        let data = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            contactNo: contactNo,
            gender: gender,
            country: country
        }

        if (data.gender !== 0 && data.country !== null) {
            try {
                await addInfo(data)
                props.history.push('/view')
            } catch (err) {
                alert(err.response.data.message)
            }
        } else {
            alert("Required fields Empty")
        }

    }

    const contactNumberOnChangeHandler = (e) => {
        setContactNo(e.target.value.replace(/\D/g, ''))
    }

    const handleGender = (gender) => {
        setgender(gender)
    }

    const handleCountry = (country) => {
        setCountry(country)
    }

    return (
        <div className="form__body">

            <Form onSubmit={createInfo}>
                <h2>Contact Info</h2>
                <FormGroup >
                    <Input required className="border border-dark" style={{ borderRadius: "10px" }} name="firstName" id="fname" placeholder="First Name" />
                </FormGroup>
                <FormGroup>
                    <Input required className="border border-dark" style={{ borderRadius: "10px" }} name="lastName" id="lname" placeholder="Last Name" />
                </FormGroup>
                <FormGroup>
                    <Input onChange={contactNumberOnChangeHandler} value={contactNo} required className="border border-dark" style={{ borderRadius: "10px" }} name="contact" id="cNo" placeholder="Contact Number" />
                </FormGroup>

                <FormGroup row>
                    <Col>
                        <Dropdown isOpen={dropdownOpen} toggle={GenderToggle}>
                            <DropdownToggle className="border border-dark" style={{ borderRadius: "10px" }} block caret color="default" outline>
                                {genderTypes[gender]}
                            </DropdownToggle>
                            <DropdownMenu style={{ width: "100%" }}>
                                <DropdownItem onClick={() => handleGender(1)}>Male</DropdownItem>
                                <DropdownItem onClick={() => handleGender(2)}>Female</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col>
                        <Dropdown isOpen={countryDropdownOpen} toggle={Countryoggle}>
                            <DropdownToggle className="border border-dark" style={{ borderRadius: "10px" }} block caret color="default" outline>
                                {country !== null ? country : "Select Country"}
                            </DropdownToggle>
                            <DropdownMenu className="" style={{ width: "100%", maxHeight: 200, overflowY: 'auto', overflowX: 'hidden' }}>
                                {countries.map((country, index) => (
                                    <DropdownItem key={index} onClick={() => handleCountry(country.name)}>
                                        {country.name}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </Col>

                </FormGroup>
                <FormGroup>
                    <Button type="submit" style={{ borderRadius: "10px" }} color="success" block>Submit</Button>
                </FormGroup>

            </Form>
        </div>
    )
}

export default withRouter(FormComponent) 
