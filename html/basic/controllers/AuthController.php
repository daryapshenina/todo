<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 18/10/18
 * Time: 13:39
 */

namespace app\controllers;
use Yii;
use yii\web\Controller;
use yii\httpclient\Client;


class AuthController extends Controller
{
    public $enableCsrfValidation = false;
    /*Заглушечный вариант*/
   public function actionIndex()
   {

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

//header('Access-Control-Allow-Headers: Content-Type');
//header('Access-Control-Allow-Credentials: true');

       $userReturn = ['name' =>'ivan','surname'=>'ivanov'];
         /*
          * Тут будет кусок поиска пользователя в бд
          * */

        $user = ['login' =>'q','password'=>'q'];
if(!empty($params)) {
    if (($user['login'] === $params['login']) && ($user['password'] === $params['password'])) {
        return json_encode($userReturn);
    } else {
        throw new \Exception('Некорректный пароль или такого пользователя не существует');
    }
}
         echo  json_encode($userReturn);
   }
}