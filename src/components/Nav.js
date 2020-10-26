import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Logo from '../images/logo.png';

const Nav = (props) => {
    return (
        <nav className="nav-wrapper bg-primary-color shadow">
            <div className="flex flex-row justify-center items-center text-center py-2">
                <NavLink to="/" className="mr-4 hover:font-bold px-2">Home</NavLink>
                <Link to="/" className="brand-logo left black-text text-3xl">
                    <img className="w-24" src={Logo} alt="Info-Bottle" />
                </Link>
                <NavLink to="/about" className="ml-4 hover:font-bold px-2">About</NavLink>
            </div>
        </nav>
    )
}

export default withRouter(Nav);