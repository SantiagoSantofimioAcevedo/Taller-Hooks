import React from 'react';
import { NavLink } from 'react-router-dom';
import '../NavItem/NavItem.css'

export const NavItem = ({to,content}) => {
    return (
    <li>
        <NavLink className='nav-link'  to={to}>{content}</NavLink>
    </li>
    );
};