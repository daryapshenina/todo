/**
 * Created by root on 26/10/18.
 */
/**
 * Created by root on 23/10/18.
 */
import React, { PropTypes, Component } from 'react'
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom'
import { SplitButton, MenuItem } from 'react-bootstrap';


/*
* Пока сделан только простой роутинг
*
* */
const isActiveFunc = (match, location) => {
    return match;
};


const Nav = styled.nav`
   
.navlink{
padding:10px;}
`;

/*class Menu extends Component {
    render() {
        return (
            <div className='pagewrap'>
            <div className = "menu">
            <Nav>
            <NavLink className="navlink" exact activeClassName='active' to='/'>Главная</NavLink>
            <NavLink className="navlink" isActive={isActiveFunc} activeClassName='active' to='/user'>Пользователи</NavLink>
            <NavLink className="navlink" isActive={isActiveFunc} activeClassName='active' to='/weather'>Погода</NavLink>
            <NavLink className="navlink"  isActive={isActiveFunc} activeClassName='active' to='/list'>Лист</NavLink>
            <NavLink className="navlink" isActive={isActiveFunc} activeClassName='active' to='/dropping'>Попытка переносимых элементов</NavLink>
            </Nav>
            </div>
        </div>

    )
    }
}
export default Menu;*/


class Menu extends Component {
    render() {
        return (
            <nav className="menu">
            <NavLink className = "menu-item" exact activeClassName='active' to='/'>Главная</NavLink>
            <NavLink className = "menu-item" isActive={isActiveFunc} activeClassName='active' to='/user'>Пользователи</NavLink>
            <NavLink className = "menu-item" isActive={isActiveFunc} activeClassName='active' to='/weather'>Погода</NavLink>
            <NavLink className = "menu-item"  isActive={isActiveFunc} activeClassName='active' to='/list'>Лист</NavLink>
            <NavLink className = "menu-item" isActive={isActiveFunc} activeClassName='active' to='/dropping'>Попытка переносимых элементов</NavLink>
            </nav>
    )
    }
}
export default Menu;
