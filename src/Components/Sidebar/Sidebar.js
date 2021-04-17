import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faPlus, faGripHorizontal, faUsers, faList, faHands } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/customer/service-list" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/customer/reviews" className="text-white">
                        <FontAwesomeIcon icon={faHands} /> <span>Reviews</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/add-service" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/make-admin" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/manage-service" className="text-white" >
                        <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;