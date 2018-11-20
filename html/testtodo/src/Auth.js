/**
 * Created by root on 13/07/18.
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux"
import {auth} from './post'
import setUserAction from './actions/usersActions'
import { Col,Form, FormGroup, Label,FormText } from 'reactstrap';


//Использование styled-components  пока выглядит как-то странно и подозрительно
// styled-components в таком виде не вызывают восторга.

const AuthForm = styled.div`
width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center; 
    justify-content: center; 
    overflow: auto;   
`;
/*
Кнопка странного вида с ракетой
 */
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  ::before {
    content: '🚀';
  }
  :hover {
    color: green;
  }
`;

const Input = styled.input`
 padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px;
`;

//ToDo попытаться добавить middleware
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
// ToDo сделать посимпатичнее отображение формы
    render() {
        return (
            <AuthForm>
            <div >
            <Input type="text" name="login"
        placeholder="Имя пользователя"
        onChange={this.onLoginChange}/>
    </div>
        <div >
            <Input type="password"
        name="password"
        placeholder="Пароль"
        onChange={this.onPasswordChange}/>
    </div>
            <Button type="submit" className = "btn btn-primary" onClick={this.findUsers}>Войти</Button>
            </AuthForm>
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
    console.log('bug')
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