import React from 'react';

const Testimonial = (props) => {
    const { name, details, address, imageURL } = props.testimonial;
    return (
        <div className="card shadow-sm d-flex align-items-center mx-1 p-2 justify-content-center">
            <img className="mx-1 w-50" src={imageURL} alt="" />
            <div className="card-body testimonial">
                <h6 className="text-primary">{name}</h6>
                <p className="m-0">{address}</p>
            </div>
            <div>
                <p style={{textAlign: 'justify'}} className="text-secondary">{details}</p>
            </div>
        </div>
    );
};

export default Testimonial;