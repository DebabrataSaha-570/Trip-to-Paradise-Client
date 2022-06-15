import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Service from '../Service/Service';

const Services = () => {
    let navigate = useNavigate()
    const [services, setServices] = useState([])
    const handleBookNow = (id) => {
        navigate(`/serviceDetail/${id}`)

    }


    useEffect(() => {
        fetch('https://sheltered-oasis-48359.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    }, [])
    return (
        <>
            <section className='container '>
                <div className='ms-3 mb-2'>
                    <h3>Trending, Best Selling Tours And</h3>
                    <h3>Fun Destinations</h3>
                </div>

                {services.length > 0 ? <div className="row">
                    {
                        services.map(service => <Service key={service._id} service={service} handleBookNow={handleBookNow}></Service>)
                    }
                </div>
                    :
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
            </section>
        </>
    );
};

export default Services;