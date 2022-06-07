import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <>
            <section className='container mb-3'>
                <h3>Trending, Best Selling Tours And</h3>
                <h3>Fun Destinations</h3>

                <div className="row">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </section>
        </>
    );
};

export default Services;