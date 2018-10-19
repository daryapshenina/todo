/**
 * Created by root on 13/07/18.
 */
import React, { Component } from 'react';

import { connect } from "react-redux"
import {auth} from './post'
import setUserAction from './actions/usersActions'
class Auth extends Component
{
constructor(props){
    super(props);
    this.state = {submitOn:true,
        login:'',
        password:''
    };
    this.onLoginChange = this.onLoginChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.findUsers = this.findUsers.bind(this);
}

//ToDo Возможно вынести форму в отдельный компонент.
//ToDo Где-то сделать валидацию данных
    render() {
        return (
            <div className='row'>
            <div className='col-md-12'>
            <input type="text" name="login"
        placeholder="Имя пользователя"
        onChange={this.onLoginChange}
        />
    </div>
        <div className='col-md-12'>
            <input type="password"
        name="password"
        placeholder="Пароль"
        onChange={this.onPasswordChange}/>
    </div>
        <div className='col-md-12'>
            <button onClick={this.findUsers}>Войти</button>
        </div>
    </div>

    )
    }

    onLoginChange(event){
        this.setState({login: event.target.value});
    }

    onPasswordChange(event){
        this.setState({password: event.target.value});
    }


/*Не самое удачное решение отправлять гет запрос, но с post появляется ошибка
Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://127.0.0.1:8081/auth/index.
(Reason: missing token ‘content-type’ in CORS header ‘Access-Control-Allow-Headers’ from CORS preflight channel).
 На данный момент всегда возвращается одна и та же заглушка.
 */

    findUsers = async () => {
    const { login, password } = this.state
try {
   const {name, surname} = await auth(login, password)
    this.props.setUser(name,surname)
    console.log(this.props.user)
} catch (e) {
    console.log(e)
}
}


}
function mapStateToProps(state) {
    return {
        user: state.users.user
    }
}

const mapDispatchToProps = {
    setUser:setUserAction
    }


export default connect(mapStateToProps,mapDispatchToProps)(Auth);