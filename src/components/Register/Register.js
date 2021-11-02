import React from 'react';

import { Link } from 'react-router-dom';
import("./Register.css")

const Register = () => {
    const handleRegistration = e => {
        console.log
            ("click")
        e.preventDefault();
    }

    const handleEmailChange = e => {
        console.log(e.target.value)

    }

    const handlePasswordChange = e => {
        console.log(e.target.value)

    }
    return (
        <div className="signin-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Enter your Email" />
                    <br />
                    <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Enter your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter your Password" />
                    <br />
                    <br />
                    <input className="button" type="submit" value="Submit" />
                </form>
                <p>Already have an account <Link to="/signin">Sign In</Link> </p>

                <div>or</div>

                <button className="button">Google Sign In</button>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


            </div>
        </div>

    );
};

export default Register;