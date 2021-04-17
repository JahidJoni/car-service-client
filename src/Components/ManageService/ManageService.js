import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    return (
        <div className="row">
        <div className="col-md-2">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
            Manage
        </div>
    </div>
    );
};

export default ManageService;