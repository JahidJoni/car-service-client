import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {

    const [orders, setOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://peaceful-wildwood-84338.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 mt-5 ml-5">
                <h3 style={{color: '#0bff96'}} className="px-5 py-2">Total {orders.length} services pending.</h3>
                {
                    orders.map(order => <div className="px-5 py-2">
                        <div class="card mb-3" style={{maxWidth: '540px'}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={order.image} className="img-fluid" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{order.service}</h5>
                                        <p class="card-text">{order.details}</p>
                                        <p class="card-text"><small class="text-muted">{order.status}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ServiceList;