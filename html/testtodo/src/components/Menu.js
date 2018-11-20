/**
 * Created by root on 26/10/18.
 */
/**
 * Created by root on 23/10/18.
 */
import React, { PropTypes, Component } from 'react'
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom'



class Menu extends Component {
    render() {
        return (
            <nav>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/user">Пользователи</NavLink>
            </nav>
    )
    }
}
export default Menu;