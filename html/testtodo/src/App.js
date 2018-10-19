import React, { Component, PropTypes} from 'react'

import User from './User'
import Auth from './Auth'
import List from './List'
import Weather from './Weather'
import Year from './Year'

import {Router, Switch, Route, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import setYearAction from './actions/actions'
import setUserAction from './actions/actions'

import { connect } from "react-redux"

const history = createBrowserHistory()

class App extends Component {

    hidden(){

        if (this.props.user=='unknown user'){
            return(
                <div>
                <Auth/>
                </div>
                )
        }
       else{
            return (
                <div>
                <User user={this.props.user}/>
            <Weather/>
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



function mapStateToProps(state) {
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
