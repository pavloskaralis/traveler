//Dependencies
const express = require('express');
const cors = require('cors');
const passport = require('./config/passport.js')();

//Environment
const app = express();
const port = process.env.PORT || 3001; 

//Middleware
app.use(cors());
app.use(express.urlencoded({extended: false}, {limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(passport.initialize());

//Controllers
const userController = require('./controllers/user.js');
app.use('/user', userController);
const itineraryController = require('./controllers/itinerary.js');
app.use('/itinerary', itineraryController);

//Listen
app.listen(port, ()=> console.log('listening'));
