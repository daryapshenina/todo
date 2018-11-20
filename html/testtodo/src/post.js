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
* _csrf - для прохождения проверки данных на стороне YII
*
 yii::$app->request->csrfParam - получение поля для _csrf(могут быть разные варианты)
 Yii::$app->request->getCsrfToken() - так можно получить "токен"
*
* */

//ToDo все-таки как нибудь поменять на post
/*Почему-то пост запросы упорно не хотят работать
* О*/
export const auth = (username, password) =>
instance
    .get('/auth/index')
    .then(({ data }) => data)
