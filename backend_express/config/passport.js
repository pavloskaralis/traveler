//Dependencies
const passport = require('passport');
const passportJWT = require('passport-jwt');
const config = require('./config.js.js');
const User = require('../models/user.js.js');

//Environment
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}
 
module.exports = function() {  
    const strategy = new Strategy(params, (payload, callback) => {
        const user = User.findById(payload.id) || null;
        user ? ()=> callback(null, {id: user.id}) : ()=> callback(new Error("User not found"), null);
    })
    passport.use(strategy)
    return {
        initialize: function() {
            return passport.initialize()
        },
        authenticate: function() {
            return passport.authenticate("jwt", {session: false})
        }
    }
}