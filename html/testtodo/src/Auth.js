/**
 * Created by root on 13/07/18.
 */
import React, { Component } from 'react';



class Auth extends Component
{
constructor(){
    super();

    this.state = {submitOn:true,
        login:'',
        password:''
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.onLoginChange = this.onLoginChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}


    /*
    * Метод, который вызывается при нажатии на кнопку "Войти"
    * Отменяется действие по умолчанию onSubmit
    */

    handleSubmit(e) {
  e.preventDefault()
     console.log(localStorage.length)
    let login = e.target.elements[0].value
    let password = e.target.elements[1].value
    console.log(login)
    console.log(password)
    window.localStorage.setItem('login',login)
    console.log(window.localStorage.length)
    console.log(this.state.submitOn)
    var className = (this.state.submitOn==="off")?"on":"off";
  console.log(className);

  console.log(this.state.submitOn)
    //this.findLogin()

}

    onSubmit(event){
        alert(`${this.state.login}, добро пожаловать!`);
        event.preventDefault();
    }

    onPasswordChange(event){
        this.setState({password: event.target.value});
    }

    onLoginChange(event) {
        this.setState({login: event.target.value});
    }

    render() {
        return (
            <div className='row'>
            <div className='col-md-12'>Пожалуйста, введите логин:</div>
        <form onSubmit={this.onSubmit}>
    <p><label> Логин: <input type="text" name="login" value={this.state.login}
        onChange={this.onLoginChange}/></label></p>
        <p><label> Пароль: <input type="password" name="password" value={this.state.password}
        onChange={this.onPasswordChange}/></label></p>
        <p><input type="submit" value="Submit" /></p>
            </form>
            </div>
    )
    }

    getAuthDate(){

    }

    findLogin(){
        console.log('test');
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps()");
    }
    /*
    * Вызывается перед рендерингом
    * */
    componentWillMount(){
        console.log("componentWillMount()");
    }
    /*
    * Вызывается сразу после рендеринга компонента
    * */
    componentDidMount(){
        console.log("componentDidMount()");
    }

    /*
    * Вызывается перед удалением компонента из DOM,
    * При работе формы еще ни разу не вызвался
    * */
    componentWillUnmount(){
        console.log("componentWillUnmount()");
    }
    /*
    * Вызывается при обновлении props и state
    * Если true, то обновлять props и state
    * Если возвращаем false, то отключаем обновление компонента,
    * последующие функции не будут срабатывать.
    * */
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate()");
        return true;
    }
    /*
    * По идее должно вызыватся  перед обновлением компонента
    * (если shouldComponentUpdate возвращает true)
    * */
    componentWillUpdate(){
        console.log("componentWillUpdate()");

    }
    /*
    * которая вызывается при обновлении объекта props.
    * Новые значения этого объекта передаются в функции в качестве параметра.
    * Как правило, в этой функции устанавливаются те свойства компонента, в том числе из this.state, которые зависят от значений из props.
    * */
    componentDidUpdate(){
       if((this.state.login!='')&&(this.state.password!='')){
           this.findLogin();
       }
        console.log("componentDidUpdate()");
    }

}

export default Auth;