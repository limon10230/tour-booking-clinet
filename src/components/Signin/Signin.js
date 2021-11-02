import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useFirbase from '../../hooks/useFirebase';
import("./Signin.css")

const Signin = () => {
    const { signInUsingGoogle } = useFirbase();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home"
    console.log(location.state?.from)

    const handleGoogLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (
        <div className="signin-form">
            <div>
                <h2>Sign In</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter your Password" />
                    <br />
                    <br />
                    <input className="button" type="submit" value="Submit" />
                </form>
                <p>New to Dental Health Care <Link to="/register">Create Account</Link> </p>

                <div>or</div>

                <button
                    className="button"
                    onClick={handleGoogLogin}
                >Google Sign In</button>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


            </div>
        </div>

    );
};

export default Signin;