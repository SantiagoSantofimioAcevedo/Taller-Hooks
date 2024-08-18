import React from 'react'
import { NavItem } from '../NavItem/NavItem';
import '../Navbar/Navbar.css'

export const Navbar = () => {
    return (
    <ul className='ulNav'>
        <NavItem to='/' content='Saludar'></NavItem>
        <NavItem to='/Calculadora' content='Calculadora'></NavItem>
        <NavItem to='/Fondo' content='Fondo Random'></NavItem>
        <NavItem to='/Formulario' content='Formulario'></NavItem>
        <NavItem to='/ListaTareas' content='Lista de Tareas'></NavItem>
    </ul>
    );
};