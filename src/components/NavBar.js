import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/R1'>Report1</NavLink></li>
                <li><NavLink to='/R2'>Report2</NavLink></li>
                <li><NavLink to='/R3'>Report3</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;