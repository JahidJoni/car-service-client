import React from 'react';
import special from '../../../images/special.jpg'
import './SpecialService.css'

const SpecialService = () => {
    return (
        <section className="special features-service mt-5">
        <div className="container mb-5">
            <div className="row mb-5">
                <div className="col-md-5 mb-4 m-md-0">
                    <img className="img-fluid py-3" src={special} alt=""/>
                </div>
                <div className="col-md-7 align-self-center">
                    <h2 style={{color: '#0bff96', backgroundColor: '#333333', padding: '0.4rem'}}>REPAIR CAR AS LIKE AS FRESH CONDITION</h2>
                    <p className="text-white my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet apevoluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                    </p>
                    <button className="btn btn-info">Learn More</button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default SpecialService;