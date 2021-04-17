import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <Link to ="/" class="navbar-brand" href="#" style={{color: '#0bff96'}}>Repaint-Car Service</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto px-5">
                        <li class="nav-item">
                            <Link to="/admin/manage-service" class="nav-link active mx-3" aria-current="page" href="#">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-3" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-3" href="#">Pricing</a>
                        </li>
                        <li class="nav-item mx-3">
                            <Link to="/login" style={{backgroundColor: '#3A3A3A', color: '#0bff96'}} class="nav-link px-4">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;