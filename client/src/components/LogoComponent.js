import React from 'react'
import logo from '../img/plant.png'
import './LogoComponent.css'
import TitleComponent from './TitleComponent'

function LogoComponent() {
    return (

        <div className="title border-right border-dark">
            <TitleComponent />

            <div className="d-flex justify-content-center">
                <img height="500" width="500" alt="logo" src={logo} />
            </div>

        </div>

    )
}

export default LogoComponent
