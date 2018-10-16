import React, { Component } from 'react'

import User from './User'
import Auth from './Auth'
import List from './List'
import Weather from './Weather'

import { Router, Switch, Route, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()



class App extends Component {

    constructor() {
        super();

        this.state = {
            name: 'Коля',
            surname: 'Иванов',
        };
    }

    render() {
        //    Почему-то ссылки не работают корректно через Link to
        //    Путь в браузере меняется, но на компонент не переходит
        //
        return (
            <div>
            <div>
            <ul>
            <li><a href="/list">1</a></li>
            <li><a href="/user">2</a></li>
            <li><Link to="/list">1</Link></li>
            <li><Link to="/user" >2</Link></li>
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

    )
    }


    showMessage() {
        console.log('!!!');
    }
//В какой же момент отправлять запросы за сервер?
//     В некоторый источниках, что ajax запрос стоит делать в componentDidMount
/*   componentWillMount(){
        console.log('777');
        fetch('http://127.0.0.1:8081/API/test.php',{
            method: 'get',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }
console.log(response.status);

                    // Examine the text in the response
                    response.json().then(function(data) {
                        console.log(data);
                    });

                }

            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

    }

    componentDidMount(){
    }

    */
}
export default App;
