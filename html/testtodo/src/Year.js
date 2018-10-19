/**
 * Created by root on 17/10/18.
 */
import React, { Component } from 'react';
class Year extends Component {
    constructor(props) {
        super(props)
        this.onBtnClick = this.onBtnClick.bind(this)
    }

    onBtnClick(event) {
        return this.props.setYear(event.target.textContent)
    }

    render() {
        return <div>
        <button onClick={this.onBtnClick}>1975</button>
        <button onClick={this.onBtnClick}>1991</button>
        <button onClick={this.onBtnClick}>2015</button>
        <p>This year has been chosen - {this.props.year}</p>
        </div>
    }
}

export default Year;