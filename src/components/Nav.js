import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className="nav-wrapper bg-primary-color shadow">
            <div className="d-flex flex-row justify-center items-center text-center">
                <NavLink to="/" className="mr-4">Home</NavLink>
                <Link to="/" className="brand-logo left black-text text-3xl">Info</Link>
                <NavLink to="/about" className="ml-4">About</NavLink>
            </div>
        </nav>
    )
}

export default withRouter(Nav);