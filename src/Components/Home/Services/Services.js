import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h3 style={{color: '#0bff96'}}>OUR SERVICES</h3>
            </div>
            <div className="d-flex justify-content-center">
            <div className="container row mt-3">
                {
                    services.map(service => 
                    <ServiceDetail service={service} key={service.name}></ServiceDetail>
                        
                        )
                }
            </div>
        </div>
        </section>
    );
};

export default Services;