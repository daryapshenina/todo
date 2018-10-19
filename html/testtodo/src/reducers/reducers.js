/**
 * Created by root on 16/10/18.
 */
import { combineReducers } from 'redux'
import users from './usersReduce'

//  Сюда можно подключить сразу несколько компонентов
const app = combineReducers({
    users
})

export default app