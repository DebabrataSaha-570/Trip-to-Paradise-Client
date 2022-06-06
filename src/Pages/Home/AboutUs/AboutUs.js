import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='container'>
            <div className="row py-5">
                <div className="col-md-5 ">
                    <img src="https://i.ibb.co/TR81WSR/glenn-carstens-peters-ZWD3-Dx6a-UJg-unsplash.jpg"
                        className='img-fluid' alt="" />
                </div>
                <div className="col-md-7">
                    <div className='ps-3 aboutUsTextDiv '>
                        <h6>About Us</h6>
                        <h3>Plan Your Trip with US</h3>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline
                        </p>
                        <button className='btn'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;