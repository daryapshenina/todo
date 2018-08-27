/**
 * Created by root on 13/07/18.
 */
import React, { Component } from 'react';



class Auth extends Component
{ handleSubmit(e) {
    e.preventDefault()
   console.log(localStorage.length)
    let login = e.target.elements[0].value
    console.log(login)
    window.localStorage.setItem('login',login)
    console.log(window.localStorage.length)
    this.findLogin()
}

    render() {
        return (
            <div className='row'>
            <div className='col-md-12'>Пожалуйста, введите логин:</div>
        <form className='col-md-4' onSubmit={this.handleSubmit}>
    <input type='text' placeholder='login'/>
            <button type='submit'>Войти</button>
            </form>
            </div>
    )
    }

    findLogin(){
    fetch('http://127.0.0.1:8081/API/test.php')
        .then(function (response) {
            console.log(response.status);
        })
        .catch(alert);



}

}

export default Auth;