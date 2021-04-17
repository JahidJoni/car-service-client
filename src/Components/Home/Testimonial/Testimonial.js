import React from 'react';

const Testimonial = (props) => {
    const {name, details, address ,imageURL} = props.testimonial;
    return (
        <div className="card shadow-sm d-flex align-items-center mx-3 p-3">
            <img className="mx-3" src={imageURL} alt="" width="120"/>
            <div className="card-body">
            <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{address}</p>
            </div>
                
                <div>
                <p className="card-text text-center">{details}</p>
            </div>
       </div>
    );
};

export default Testimonial;