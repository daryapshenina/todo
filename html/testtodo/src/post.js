/**
 * Created by root on 18/10/18.
 */
import axios from 'axios'
var url = "http://"+window.location.hostname+":8081";
console.log(url);
const instance = axios.create({
    baseURL: url,
  //  timeout: 1000,
    headers: {'Content-Type': 'multipart/form-data'}
});
/*
* _csrf - для прохождения проверки данных на стороне YII
*
 yii::$app->request->csrfParam - получение поля для _csrf(могут быть разные варианты)
 Yii::$app->request->getCsrfToken() - так можно получить "токен"
*
* */

export const auth = (username, password) =>
instance
    .post('/auth/index',{
        username: username,
        password: password
    })
    .then(({ data }) => data)
