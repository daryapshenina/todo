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
/*
 http://bogdanov-blog.ru/react-router-v4-notes/ - ссылка, по которой делала роутинг, по другим почему-то не заработало
*/
import React, { Component, PropTypes} from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import User from './User'
import Auth from './Auth'
import List from './List'
import Weather from './Weather'
import Menu from './components/Menu'

import setYearAction from './actions/actions'
import setUserAction from './actions/actions'
//import { getPhotos } from './actions/PageActions'

import { Button } from 'reactstrap';

import { connect } from "react-redux"

const Home = () => <h1>Home</h1>;

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
                <Router>
                <div>
                <Menu/>
                <Route exact path='/' component={Home}/>
                <Route path='/user' component={User}/>
                <Route path='/list' component={List}/>
                <Route path='/weather' component={Weather}/>
                </div>
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
