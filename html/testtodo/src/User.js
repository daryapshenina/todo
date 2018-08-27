/**
 * Created by root on 12/07/18.
 */
import React, { Component } from 'react';

class User extends Component {
    constructor() {
        super();
        this.state = {name: 'Иван', surname: 'Иванов'};
    }

    render() {
        return (
            <div>111+{this.state.name}</div>
        /*<div>
         <p>имя: {this.props.name}</p>
         <p>фамилия: {this.props.surname}</p>

         <button onClick={this.props.showMessage}>
         нажми на меня
         </button>
         </div>*/
    );
    }
}
export default User;