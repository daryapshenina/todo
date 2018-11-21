/**
 * Created by root on 29/08/18.
 */
import React, { Component } from 'react';

/*
* Компонент, который получает погоду по координатам пользователя.
* Используется API https://openweathermap.org
*
* */

// ToDo пока геолокация не работает, если делать запрос с http://172.30.1.37:3000/
// ToDo для геолокации нужно использовать HTTPS (пока не добавляла самоподписанный сертификат)

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            latitude: '',
            longitude: '',
            temperature:'',
            city:'',
            basicUrl:"http://"+window.location.hostname+":8081/test/index"
        };
        this.getLatitude = this.getLatitude.bind(this);
        this.getLongitude = this.getLongitude.bind(this);
        this.getCity = this.getCity.bind(this);
        this.getTemperature = this.getTemperature.bind(this);
        this.getAttribute = this.getAttribute.bind(this);
    }


    render() {
        return (
            <div>
        {this.getLatitude()}
        {this.getLongitude()}
        {this.getCity()}
        {this.getTemperature()}
        </div>
    )
        ;
    }
/* Возможно попытаться свести все 4 метода к одному
* */
    getAttribute(name,state){
        console.log('getAttribute')
        console.log(this.state.state);
        if(this.state.$state===""){
        }
        else{
            console.log(name);
            return(
                <p>{name} - {this.state.$state}</p>
        )
        }
    }

    getLatitude(){
        console.log(this.state.basicUrl);
        if(this.state.latitude===""){
        }
        else{
            return(
            <p>Широта - {this.state.latitude}</p>
        )
        }
    }

    getLongitude(){
        if(this.state.longitude===""){
        }
        else{
            return(
                <p>Долгота - {this.state.longitude}</p>
        )
        }
    }
    getCity(){
        if(this.state.city===""){
        }
        else{
            return(
                <p>Город - {this.state.city}</p>
        )
        }
    }
    getTemperature(){
        if(this.state.temperature===""){
        }
        else{
            return(
                <p>Температура - {this.state.temperature}</p>
        )
        }
    }

    shouldComponentUpdate(){
        return true;
    }
    // ToDo Доработать функционирование с reject
    componentDidMount(){

       var geo = this.getGeolocation();
       geo.then((position) => {
        this.setState({latitude: position.latitude,longitude: position.longitude});
        return position;
    })
        .then(()=>{
           var url= this.state.basicUrl+'?'+'lat='+this.state.latitude+'&lon='+this.state.longitude;
            fetch(url,{
            method: 'get',
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
    .then((response)=>{
            console.log(response)
        response.json().then(function(data) {
            console.log(data)
            return data;
        })
            .then((data)=>{
            this.setState({city: data.city,temperature: data.temperature});
        })
    })
    })
    .catch(error => {
        console.log('55555');
            console.log(error); // Error: Not Found
    });
    }
// ToDo Доработать функционирование с reject
    getGeolocation(){
     return new Promise(function (resolve,reject) {
         if (navigator.geolocation) {
             var timeoutVal = 10 * 1000 * 1000;
             navigator.geolocation.getCurrentPosition(
                 displayPosition,
                 displayError,
                 { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
             );
         }
         else {
             alert("Geolocation не поддерживается данным браузером");
         }

         function displayPosition(position) {
             console.log(position.coords.accuracy);
             if(position.coords.accuracy<10000){
                 console.log("Широта: " + position.coords.latitude + ", Долгота: " + position.coords.longitude);
                resolve( position.coords)

             }else {
                 console.log('Слишком низкая точность определения координат. Пользователь может быть где угодно');
                 reject();
             }

             console.log('Точность определения координат '+ position.coords.accuracy);
         }
         function displayError(error) {
             var errors = {
                 1: 'Нет прав доступа',
                 2: 'Местоположение невозможно определить',
                 3: 'Таймаут соединения'
             };
             console.log("Ошибка: " + errors[error.code]);
             reject();
         }

     })
    }

}

export default Weather;