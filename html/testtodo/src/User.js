/**
 * Created by root on 12/07/18.
 */
import React, { Component } from 'react';
import { connect } from "react-redux"

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
        <p>Пользователь - {this.props.user}</p>
        <button onClick = {this.addNewUsers}>Добавить нового пользователя</button>
        <button onClick = {this.deleteCurrentUser}>Удалить текущего пользователя</button>
        </div>
    }
    addNewUsers(){
        <div>
        <div >
        <input type="text" name="login"
        placeholder="Имя пользователя"
        />
    </div>
        <div >
        <input type="password"
        name="password"
        placeholder="Пароль"
        />
    </div>
        <button type="submit" onClick={this.findUsers}>Войти</button>
        </div>

    }
    deleteCurrentUser(){

    }

}


function mapStateToProps(state) {
    return {
        user: state.users.user,
    }
}

export default connect(mapStateToProps)(User);