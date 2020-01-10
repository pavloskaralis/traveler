import React, { Component } from 'react'
import history from '../../history'
import axios from 'axios'
import './Home.css'

class Home extends Component {
    render () {
        return (
            <React.Fragment>
            <div className="color-overlay"></div>
            <div className="image-overlay"></div>
            <div className="gradient-overlay"></div>
            <div className="home-container">
                    <div className="home-wrap">
                        <div className="slogan-container">
                            <h1 className="plan-early">Plan {'\u00A0'} <br/> Early</h1>
                            <div className="relax-wrap">
                                <h1 className="relax">& Relax.</h1>
                            </div>
                        </div>
                        <h2>Have a big trip around the corner? <br/>
                        Invite your friends & plan together.</h2>
                    </div>
                    <div className="home-wrap mobile-home-wrap">
                        <div className="button-container">
                            <div onClick={this.props.toggleForm} className="sign-up" id="signup">Sign Up</div>
                            <div onClick={this.props.toggleForm} className="login" id="login">Login</div>
                        </div>
                    </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Home

  