import React from 'react'
import { connect } from 'react-redux'
import toggleForm from '../../actions/toggleForm.js'
import signUp from '../../actions/signUp.js'
import logIn from '../../actions/logIn.js'
import postItinerary from '../../actions/postItinerary.js'
import selectItinerary from '../../actions/selectItinerary.js'
import putItinerary from '../../actions/putItinerary.js'
import './Form.css'


const mapStateToProps = state => {
    return {
        form: state.form,
        error: state.error,
        userID: state.userID,
        itinerary: state.itinerary
    }
}

const mapDispatchToProps = {
    toggleForm,
    signUp,
    logIn,
    postItinerary,
    selectItinerary,
    putItinerary
}

//form reused for home, index, and show pages
function Form({form, error, toggleForm, signUp, logIn, page, postItinerary, userID, itinerary, selectItinerary, putItinerary}) {
    //define variables for ref attributes
    let username;
    let password;
    let location;
    let departureDate;
    let returnDate;
    const allInputs = [username,password,location,departureDate,returnDate];

    const submit = e => {
        e.preventDefault();
        //prevent empty input submission 
        let exit = false;
        allInputs.forEach(input => {if(input && !input.value) exit = true})
        if(exit)return;
        //switch submit actions based on form type
        switch(form) {
            case 'sign up': signUp(username.value,password.value);
                break;
            case 'log in': logIn(username.value,password.value);
                break;
            case 'new': postItinerary(location.value,departureDate.value,returnDate.value,userID)
                break;
            case 'update': putItinerary(location.value,departureDate.value,returnDate.value,itinerary.id,itinerary.index)
        }
        //reset values
        allInputs.forEach(input => {if(input) input.value = ''});
    }
    //transform button text to form legend text
    let legend = form;
    switch(form) {
        case 'new': legend = 'new itinerary';
            break;
        case 'update': legend = 'update itinerary';
            break;
    }
    //refactor departure and return date for update form default values
    let firstDay;
    let lastDay;
    if(form === 'update'){
        firstDay = itinerary.dates[0].split('.');
        lastDay = itinerary.dates[itinerary.dates.length - 1].split('.');
        firstDay[2] = '20' + firstDay[2];
        lastDay[2] = '20' + lastDay[2];
        firstDay = firstDay[2] + '-' + firstDay[0] + '-' + firstDay[1];
        lastDay = lastDay[2] + '-' + lastDay[0] + '-' + lastDay[1];
    }
    //inputs vary based on page and form type
    return (
        <div className="form-container" onClick={()=>{if(form){toggleForm('')};selectItinerary('')}}>
            <form onSubmit={ submit } onClick={e => e.stopPropagation()} >
                <legend>{error? error : legend }</legend>
                {/* home page has login and signup form */}
                {page === 'home' &&
                    <>
                        <div className="input-container">
                            <label>Username</label>
                            <input type="text" ref={node => username = node}/>
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input type={form==="log in" ? "password" : "text"} ref={node => password = node}/>
                        </div>
                    </>
                }
                {/* index page has itinerary create and update form */}
                {page === 'index' &&
                    <>
                        <div className="input-container">
                            <label>Location</label>
                            <input type="text" ref={node => location = node} defaultValue={form === 'update' ? itinerary.location : ''}/>
                        </div>
                        <div className="input-container">
                            <label>Departure</label>
                            <input type="date" ref={node => departureDate = node} defaultValue={firstDay}/>
                        </div>
                        <div className="input-container">
                            <label>Return</label>
                            <input type="date" ref={node => returnDate = node} defaultValue={lastDay}/>
                        </div>
                    </>
                }
                <div className="button-container">
                    <div onClick={()=> {toggleForm(''); selectItinerary('')}} className="cancel">Cancel</div>
                    <div type="submit" className="submit" onClick={ submit }>Submit</div>
                    {/* required for enter key to work for unknown reason */}
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

  