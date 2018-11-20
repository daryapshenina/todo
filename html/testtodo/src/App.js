/*
* Желаемый функционал:
* 1)Авторизация (пока используются get запросы и нет обращений в бд)
* 2) замена url
* 3) получение текущей погоды
* 4) отображение текущего пользователя
* 5) Выход из авторизированного состояния
* 6) отображение фоток для разбора решений redux с асинхронными действиями - возможно в асинхронные действия перетащить часть погодного компонента
* 7) что-то типа горизонтального меню
* 8) если получится, то сделать загрузку файлов ( почему-то в реакте не работает, а просто html+js работает, страннота)
* 9) Добавление пользователя
* */

import React, { Component, PropTypes} from 'react'

import User from './User'
import Auth from './Auth'
import List from './List'
import Weather from './Weather'
import Page from  './Page'
import Menu from './components/Menu'
import {Router, Switch, Route, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import setYearAction from './actions/actions'
import setUserAction from './actions/actions'
import { getPhotos } from './actions/PageActions'

import { Button } from 'reactstrap';

import { connect } from "react-redux"

const history = createBrowserHistory()

class App extends Component {


    hidden(){
        if (this.props.user=='unknown user'){
            return(
                <div>
                <Auth/>
                </div>
        )}
       else{
            return (
                <div>
                <Menu/>
                <Weather/>

                <Router history={history}>
                <Switch>
                <Route path='/user' component={User}/>
                <Route path='/list' component={List}/>
                <Route path='/weather' component={Weather}/>
                </Switch>
                </Router>
                </div>
            )
        }
    }
    render() {

        return (
            <div>
            {this.hidden()}
            </div>

    );
    }


}

function mapStateToProps(state, ownProps) {
    return {
        user: state.users.user,
        year: state.users.year
    }
}

function mapDispatchToProps(dispatch) {
    return {
            setYearFunction: year => {
            dispatch(setYearAction(year))
}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
/* <ul>
 <li><a href="/list">list</a></li>
 <li><a href="/user">user</a></li>
 </ul>
 </div>
 <Router history={history}>
 <Switch>
 <Route exact path='/' component={Auth}/>
 <Route path='/user' component={User}/>
 <Route path='/list' component={List}/>
 <Route path='/weather' component={Weather}/>
 </Switch>
 <div>
 <User user={this.props.user}/>
 <Year year={this.props.year} setYear={this.props.setYearFunction}/>
 </div>


 </Router>
 </div>
 class App extends Component {
 render() {
 return (
 <div><h2>React {this.props.user}</h2>
 <div>
 <User user={this.props.user}/>
 <Year year={this.props.year} setYear={this.props.setYearFunction}/>
 </div>
 <div>
 <ul>
 <li><a href="/list">list</a></li>
 <li><a href="/user">user</a></li>
 </ul>
 </div>
 <Router history={history}>
 <Switch>
 <Route exact path='/' component={Auth}/>
 <Route path='/user' component={User}/>
 <Route path='/list' component={List}/>
 <Route path='/weather' component={Weather}/>
 </Switch>
 </Router>
 </div>
 );
 }
 }
 */
