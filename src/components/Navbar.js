import React from 'react';
import { NavLink} from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar bg-primary">
            <div className="container-fluid">
            <NavLink className="nav-link" aria-current="page" exact to="/">
                <i className="fa fa-home fa-fw" style={{width: "120px", color:"white"}}></i>
                </NavLink>
            </div>
        </nav>


    )
}

export default Navbar;