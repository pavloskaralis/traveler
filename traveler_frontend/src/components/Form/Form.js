import React from 'react'
import { connect } from 'react-redux'
import toggleForm from '../../actions/toggleForm.js'
import signUp from '../../actions/signUp.js'
import logIn from '../../actions/logIn.js'
import createItinerary from '../../actions/createItinerary.js'
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
    logIn,
    createItinerary
}

function Form({form, error, toggleForm, signUp, logIn, page, createItinerary}) {
    let username;
    let password;
    let location;
    let departureDate;
    let returnDate;

    const submit = e => {
        e.preventDefault();

        let exit = false;
        [username,password,location,departureDate,returnDate].forEach(input => {if(input && !input.value) exit = true})
        if(exit)return;

        switch(form) {
            case 'signup': signUp(username.value,password.value);
                break;
            case 'login': logIn(username.value,password.value);
                break;
            case '+': createItinerary(location.value,departureDate.value,returnDate.value)
        }
        if(username)username.value = '';
        if(password)password.value = '';
        if(location)location.value = '';
        if(departureDate)departureDate.value = '';
        if(returnDate)returnDate.value = '';
    }

    let legend = form;
    switch(form) {
        case '+': legend = 'New Itinerary';
            break;
    }
    


    return (
        <div className="form-container" onClick={()=>{if(form)toggleForm('')}}>
            <form onSubmit={ submit } onClick={e => e.stopPropagation()} >
                <legend>{error? error : legend }</legend>
                {page === 'home' &&
                    <>
                        <div className="input-container">
                            <label>Username</label>
                            <input type="text" ref={node => username = node}/>
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input type={form==="login" ? "password" : "text"} ref={node => password = node}/>
                        </div>
                    </>
                }
                {page === 'itinerary' &&
                    <>
                        <div className="input-container">
                            <label>Location</label>
                            <input type="text" ref={node => location = node}/>
                        </div>
                        <div className="input-container">
                            <label>Departure</label>
                            <input type={"text"} pattern="\d{1,2}/\d{1,2}/\d{2}" placeholder='MM/DD/YY' ref={node => departureDate = node}/>
                        </div>
                        <div className="input-container">
                            <label>Return</label>
                            <input type={"text"} pattern="\d{1,2}/\d{1,2}/\d{2}" placeholder='MM/DD/YY' ref={node => returnDate = node}/>
                        </div>
                    </>
                }
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

  