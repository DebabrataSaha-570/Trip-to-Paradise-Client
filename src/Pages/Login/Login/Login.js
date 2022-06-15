import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import './Login.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const { user, signInUsingGoogle } = useAuth()
    return (

        <>
            <Navigation></Navigation>
            <section className="login-box">
                <h3>Login</h3>
                <button onClick={signInUsingGoogle} className="login-button">
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" />
                    <b className="">Continue with Google</b>
                </button>
                <p>Don't have an account? create one</p>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Login;