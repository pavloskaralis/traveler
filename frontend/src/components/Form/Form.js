import React, { Component } from 'react'
import { connect } from 'react-redux'
import toggleForm from '../../actions/toggleForm.js'
import signUp from '../../actions/signUp.js'
import logIn from '../../actions/logIn.js'
import './Form.css'


const mapStateToProps = state => {
    return {
        form: state.form,
        error: state.error
    }
}

const mapDispatchToProps = {
    toggleForm,
    signUp,
    logIn
}

function Form({form, error, toggleForm, signUp, logIn}) {
    let username;
    let password;
    const submit = e => {
        e.preventDefault();
        if(!username.value || !password.value) return;
        if(form === 'signup') signUp(username.value,password.value);
        if(form === 'login') logIn(username.value,password.value);
        username.value = '';
        password.value = '';
    }
    return (
        <div className="form-container">
            <form onSubmit={ submit } >
                <legend>{error? error : form}</legend>
                <div className="input-container">
                    <label>Username</label>
                    <input type="text" ref={node => username = node}/>
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type={form==="login" ? "password" : "text"} ref={node => password = node}/>
                </div>
                <div className="button-container">
                    <div onClick={()=> toggleForm('')} className="cancel">Cancel</div>
                    <div type="submit" className="submit" onClick={ submit }>Submit</div>
                    <input className="invisible" type="submit"/>
                </div>
            </form>
        </div>
    )
}

Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)

export default Form

  