import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 service text-center mb-3 bg-dark py-4">
            <img style={{height: '160px'}} src={service.imageURL} alt="" />
           <div className="px-3">
           <h5 className="mt-2 mb-3 text-white">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
           </div>
            <Link to={`/order/${service._id}`} className="btn btn-info btn-sm">Get Service <FontAwesomeIcon icon={faArrowRight}/> </Link>
        </div>
    );
};

export default ServiceDetail;