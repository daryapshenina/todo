<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 21/09/18
 * Time: 14:55
 */

namespace app\controllers;
use Yii;
use yii\web\Controller;
use yii\httpclient\Client;

class TestController extends Controller
{

    private $weather_id='a9332a859910e9e26458063e57835583';
public function actionIndex(){
   // var_dump(Yii::$app->request->post());
//var_dump(Yii::$app->request->get());

    $params = Yii::$app->request->get();
    $string='APPID='.$this->weather_id.'&lat='.$params['lat'].'&lon='.$params['lon'];

    header('Access-Control-Allow-Origin: *');
    $client = new Client([
       'baseUrl'   => 'api.openweathermap.org',
        'transport' => 'yii\httpclient\CurlTransport',
    ]);
    $response = $client->get('data/2.5/weather?'.$string)->send();
    $weather =$this->constructWeather($response->data);
    return json_encode($weather);
}

public function constructWeather($weather){
    $remasteredWeather = array();
    $remasteredWeather['city'] = $weather['name'];
    $remasteredWeather['temperature'] = round($weather['main']['temp']-273,2);
    return $remasteredWeather;
}
}