import React, { Component } from 'react'
import { connect } from 'react-redux'
import toggleForm from '../../actions/toggleForm.js'
import './Home.css'

const mapDispatchToProps = {
    toggleForm
}

function Home({toggleForm}) {
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
                            <div onClick={()=> toggleForm('signup')} className="sign-up">Sign Up</div>
                            <div onClick={()=> toggleForm('login')} className="login">Login</div>
                        </div>
                    </div>
            </div>
        </React.Fragment>
    )
}

Home = connect(
    null,
    mapDispatchToProps
)(Home)

export default Home

  