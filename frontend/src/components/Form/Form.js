import React, { Component } from 'react'
import history from '../../history'
import axios from 'axios'
import './Form.css'

class Form extends Component {
    state = {
        username: '',
        password: '',
        error: ''
    }

    handleChange = (e) => this.setState({[e.target.id]: e.target.value});

    handleSignUp = (e) => {
        e.preventDefault();
        if(this.state.username && this.state.password) {
            axios.post('http://localhost:3001/user/signup', {
                username: this.state.username,
                password: this.state.password
            }).then(response => {
                localStorage.token = response.data.token;
                this.props.remount();
            }).catch(err => this.setState({
                username: '',
                password: '',
                error: 'Username Already Taken'
            }))
        }
      }

    handleLogIn = (e) => {
        e.preventDefault();
        if(this.state.username && this.state.password) {
            axios.post('http://localhost:3001/user/login', {
                username: this.state.username,
                password: this.state.password
            }).then(response => {
                localStorage.token = response.data.token;
                this.props.remount();
            }).catch(err => this.setState({
                username: '',
                password: '',
                error: 'Invalid Username/Password'
            }))
        }
    }

    render () {
        return (
            <div className="form-container">
                <form onSubmit={this.props.type === 'signup' ? this.handleSignUp : this.handleLogIn}>
                    <legend>{this.state.error? this.state.error : this.props.type}</legend>
                    <div className="input-container">
                        <label>Username</label>
                        <input type="text" onChange={this.handleChange} id="username"/>
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input type="text" onChange={this.handleChange} id="password"/>
                    </div>
                    <div className="button-container">
                        <div onClick={this.props.toggleForm} className="cancel" id="">Cancel</div>
                        <div className="submit" onClick={this.props.type === 'signup' ? this.handleSignUp : this.handleLogIn}>Submit</div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form

  