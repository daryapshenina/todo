/**
 * Created by root on 12/07/18.
 */
import React, { Component } from 'react';
import { connect } from "react-redux"

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
        <p>Пользователь - {this.props.user}</p>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.users.user,
    }
}

export default connect(mapStateToProps)(User);