/**
 * Created by root on 18/10/18.
 */
import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8081/',
  //  timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});
/*
* ToDo поменять на post запрос, добавить данные для отправки (логин и пароль)
* */

export const auth = (username, password) =>
instance
    .get('/auth/index')
    .then(({ data }) => data)
