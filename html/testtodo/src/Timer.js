/**
 * Created by root on 11/07/18.
 */
import React, { Component } from 'react';

class Timer extends Component {
    constructor(){
        super();
        this.state = {name:'Dara',surname:'S',age:25,hello:false,show:true,
            list:[1, 2, 3, 4, 5],
            value:''
        };
    }

    render() {
        return (
            <div> 777
        </div>
    );
    }

    tictoc(){
        setInterval(this.timer,1000)

    }
    timer(){
        console.log('Прошла еще одна секунда ')
    }

}

export default Timer;