import React, { Component, PropTypes} from 'react'

import User from './User'
import Auth from './Auth'
import List from './List'
import Weather from './Weather'
import Year from './Year'
import Video from './Video'
import Logout from './Logout'
import {Router, Switch, Route, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import styled from 'styled-components';
import setYearAction from './actions/actions'
import setUserAction from './actions/actions'
import { Button } from 'reactstrap';

import { connect } from "react-redux"

const history = createBrowserHistory()
/*
* ToDo разобраться с настройкой css
*React-bootstrap вроде работает пока только с 3 бутстрапом.
*
*
* */

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
