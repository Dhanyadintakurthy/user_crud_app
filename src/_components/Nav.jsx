import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink to="/users" className="nav-item nav-link">Users</NavLink>
            </div>
        </nav>
    );
}

export { Nav };