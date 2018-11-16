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
export const auth = (username, password) =>
instance
    .post('/auth/index',{'_csrf':'5m4CQ-noWRO4SYhEVhLQm8hhY1Pbg5Rn2R1iyfkWM321VzZ20YoxRsso_DZ7RrKj8QQ0HLS38UqzfAaDoSBeTg=='})
    .then(({ data }) => data)
