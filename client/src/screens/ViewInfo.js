import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'
import TitleComponent from '../components/TitleComponent';
import { getInfo } from "../service/contact.js";

import './viewInfo.css';


export default function ViewInfo() {
    const [contactDetails, setContactDetails] = useState([])
    useEffect(() => {
        getContactInfo()
    }, [])

    const getContactInfo = async () => {
        try {
            const contactData = await getInfo()
            setContactDetails(contactData.data);
        } catch (err) {
            alert(err.response.data.message)
        }
    }
    return (

        <div className="page__body border border-dark">
            <div className="info__title">
                <TitleComponent />
                <h2>Contact List</h2>
            </div>
            <div className="table__body">
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact Number</th>
                            <th>Country</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactDetails.map((item, index) => (
                            <tr className="table__row" key={index}>
                                <th scope="row">{item.firstName + " " + item.lastName}</th>
                                <td>{item.contactNo}</td>
                                <td>{item.country}</td>
                                <td>{item.gender === 1 ? "Male" : "Female"}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
