/**
 * Created by root on 13/08/18.
 */
import React from 'react'
import {Route} from 'react-router-dom'


import User from './User'
import Auth from './Auth'
import List from './List'

export const routes = (
    <div>
    <Route path='/' component={Auth}>
    <IndexRoute component={Home} />
    <Route path='/admin' component={User} />
    <Route path='/genre/:genre' component={User}>
    <Route path='/genre/:genre/:release' component={User} />
    </Route>
    <Route path='/list' component={List} />
    </Route>
    </div>
)
