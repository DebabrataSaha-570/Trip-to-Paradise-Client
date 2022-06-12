import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faCircleCheck, faHeadset } from '@fortawesome/free-solid-svg-icons';

import './Gutters.css'
const Gutters = () => {
    return (
        <section className='container mt-5'>
            <div className="row">
                <div className="col-md-4  ">
                    <div className='d-flex gutterDiv p-3 mb-2'>
                        <FontAwesomeIcon icon={faGlobe} size="2x" />
                        <div className='ps-3'>
                            <h4>700+ DESTINATIONS</h4>
                            <p>Far far away, behind the word mountains, far countries Vokalia.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4  ">
                    <div className='d-flex gutterDiv p-3 mb-2'>
                        <FontAwesomeIcon icon={faCircleCheck} size="2x" />
                        <div className='ps-3'>
                            <h4>BEST PRICE GUARANTEE</h4>
                            <p>Far far away, behind the word mountains, far countries Vokalia.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4  ">
                    <div className='d-flex gutterDiv p-3 mb-2'>
                        <FontAwesomeIcon icon={faHeadset} size="2x" />
                        <div className='ps-3'>
                            <h4>TOP NOTCH SUPPORT</h4>
                            <p>Far far away, behind the word mountains, far countries Vokalia.</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Gutters;