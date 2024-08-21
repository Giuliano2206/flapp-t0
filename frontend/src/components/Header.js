import React from "react";
import '../styles/Header.css'

const Header = () => {
    return(
        <header className="header">
            <img src="logo.png" alt="Nomad" className="logo"/>
            <div className="header-message">Prueba técnica.</div>
        </header>
    )
}

export default Header;