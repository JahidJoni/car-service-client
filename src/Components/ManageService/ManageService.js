import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './ManageService.css'

const ManageService = () => {
    const [services, setServices] = useState([])
    const [deleteService, setDeleteService] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-wildwood-84338.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    const handleDelete = (id) => {
        const remainingService = deleteService.filter(items => items._id !== id);

        fetch(`https://peaceful-wildwood-84338.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        })
            .then(res => {
                res.json()
            })
            .then(data => {
                setDeleteService(remainingService);
                alert('Service Removed')
            });
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 mt-5 text-center">
                <h3 style={{color: '#0bff96'}}>Available Services - </h3>
                <div className="d-flex justify-content-center align-items-center">
                <table className="text-center mt-5">
                    <tr>
                        <th>Service Name</th>
                        <th>Service Cost</th>
                        <th>Action</th>
                    </tr>
                    {
                        services.map(service => <tr>
                            <td>{service.name}</td>
                            <td>{service.cost}</td>
                            <td><button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(service._id)}>Delete</button> </td>
                        </tr>)
                    }
                </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;