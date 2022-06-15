import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import './Navigation.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark trip-to-paradise-navbar sticky-top">
                <div className="container">
                    <Link className="navbar-brand trip-to-paradise-navbar-brand" to="/home"><FontAwesomeIcon icon={faLocationDot} /> Trip to Paradise</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home" className='nav-link active'>Home</Link>
                            </li>
                            {user.email ?
                                <li className="nav-item">
                                    <a onClick={logOut} className="nav-link active">Logout</a>
                                </li>
                                :
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link active">Login</Link>
                                </li>

                            }
                            {user.email && <li className="nav-item">
                                <Link className="nav-link active" to="/myOrders">My Orders</Link>
                            </li>}
                            {user.email && <li className="nav-item">
                                <Link className="nav-link active" to="/manageOrder">Manage Orders</Link>
                            </li>}
                            {user.email && <li className="nav-item">
                                <Link to="/addService" className="nav-link active">
                                    AddService
                                </Link>
                            </li>}

                            <li className="nav-item">
                                <a className="nav-link active">Contact Us</a>
                            </li>
                            {user.email && <li className="nav-item">
                                <a className="nav-link active">
                                    <img src={user.photoURL} alt="" width="30" height="24" />
                                </a>
                            </li>}
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;