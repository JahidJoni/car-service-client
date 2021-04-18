import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../../images/mainhaed.jpg'
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const MainHead = () => {
    return (
        <div style={{backgroundColor: '#333333', color: '#0bff96'}}>
        <Navbar></Navbar>
        <div className="row p-5">
            <div className="col-md-6 d-flex align-items-center">
              <div>
              <h1>Upgrade Your Car. Make It Powerful!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, possimus alias maiores inventore quis neque obcaecati eveniet. Maiores, non vero?</p>
                <br/>
                <Link to="/services" className="btn btn-info mb-2">Explore Our Services <FontAwesomeIcon icon={faArrowRight}/></Link>
              </div>
            </div>
            <div className="col-md-6">
                <img className="img-fluid mt-1" src={banner} alt=""/>
            </div>
        </div>
        </div>
    );
    
};

export default MainHead;