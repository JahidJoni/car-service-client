import React from 'react';
import banner from '../../../../images/mainhaed.jpg'
import Navbar from '../Navbar/Navbar';

const MainHead = () => {
    return (
        <div style={{backgroundColor: '#333333', color: '#0bff96'}}>
        <Navbar></Navbar>
        <div className="row p-5">
            <div className="col-md-6 d-flex align-items-center">
              <div className="">
              <h1>Upgrade Your Car. Make It Powerful!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, possimus alias maiores inventore quis neque obcaecati eveniet. Maiores, non vero?</p>
                <br/>
                <button className="btn btn-info">Explore Our Services</button>
              </div>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={banner} alt=""/>
            </div>
        </div>
        </div>
    );
    
};

export default MainHead;