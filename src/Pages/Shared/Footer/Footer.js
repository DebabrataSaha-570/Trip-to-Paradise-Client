import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

const Footer = () => {
    return (
        <section className='p-5 aboutUsFooterParentDiv'>
            <div className='container'>
                <div className="row p-3">
                    <div className="col-md-4 px-4">
                        <h2>Trip to Paradise</h2>
                        <p>Trip to Paradise sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.</p>

                        <div class="input-group mb-3 mt-5">
                            <input type="text" class="form-control" placeholder="Enter your email" aria-describedby="button-addon2" />
                            <button class="btn aboutUsInputButton" type="button" id="button-addon2">Submit</button>
                        </div>
                    </div>

                    <div className="col-md-4 px-4">
                        <h3>Navigation</h3>
                        <hr />
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Destination</li>
                            <li>Tour</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="col-md-4 contactUs px-4">
                        <h3>Need Help?</h3>
                        <hr />
                        <div>
                            <small>Call Us</small>
                            <p>016233333333</p>

                        </div>
                        <div>
                            <small>Email for Us</small>
                            <p>triptoparadise@gmail.com</p>

                        </div>
                        <div>
                            <small>Location</small>
                            <p>221b Baker St, London</p>

                        </div>
                        <div>
                            <small>Follow us</small>
                            <h4><a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href=""> <FontAwesomeIcon icon={faInstagram} /></a>
                                <a href=""> <FontAwesomeIcon icon={faTwitter} /></a>
                            </h4>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;