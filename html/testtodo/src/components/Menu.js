/**
 * Created by root on 26/10/18.
 */
/**
 * Created by root on 23/10/18.
 */
import React, { PropTypes, Component } from 'react'
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom'


/*
* Пока сделан только простой роутинг
*
* */
const isActiveFunc = (match, location) => {
    return match;
};

class Menu extends Component {
    render() {
        return (
            <nav>
            <NavLink exact activeClassName='active' to='/'>Главная</NavLink>
            <NavLink isActive={isActiveFunc} activeClassName='active' to='/user'>Пользователи</NavLink>
            <NavLink isActive={isActiveFunc} activeClassName='active' to='/weather'>Погода</NavLink>
            <NavLink isActive={isActiveFunc} activeClassName='active' to='/list'>Лист</NavLink>
            </nav>
    )
    }
}
export default Menu;