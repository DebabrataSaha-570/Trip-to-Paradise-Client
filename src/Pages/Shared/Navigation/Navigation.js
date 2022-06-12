import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark trip-to-paradise-navbar sticky-top">
                <div className="container">
                    <a className="navbar-brand trip-to-paradise-navbar-brand" href="#"><FontAwesomeIcon icon={faLocationDot} /> Trip to Paradise</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home" className='nav-link active'>Home</Link>
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/myOrders">My Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/manageOrder">Manage Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addService" className="nav-link active">
                                    AddService
                                </Link>
                                {/* <a className="nav-link active" href="#">AddService</a> */}
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active">Contact Us</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;