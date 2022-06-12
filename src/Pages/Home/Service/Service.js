import React from 'react';
import './Service.css';

const Service = (props) => {

    const { _id, placeName, description, image, duration, dress, price } = props.service;
    return (
        <div className='col-md-4 d-flex justify-content-center'>
            <div class="card shadow mb-3" style={{ width: '22rem' }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{placeName}</h5>
                    <p class="card-text">{description.split(' ').splice(0, 17).join(' ')}...</p>
                    <div className='d-flex justify-content-between'>
                        <h5>${price}</h5>
                        <button onClick={() => props.handleBookNow(_id)} className='btn serviceBookNowBtn'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;