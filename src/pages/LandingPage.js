import React from "react";
import "../styles/LandingPage.css";

function  LandingPage({onLogin, onSignup}) {
    return ( 
        <div className="landing-page">
            <header className="header">
                <h1>Inventory Management</h1>
                <p>Keep track of your inventory efficiently and never miss an expiry date!</p>
            </header>
            <div className="actions">
                <button className="btn login-btn" onClick={onLogin}>Login</button>
                <button className="btn signup-btn" onClick={onSignup}>Sign-up</button>
            </div>
        </div>
    );
}

export default LandingPage;