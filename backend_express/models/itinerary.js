//Dependencies
const mongoose = require('../db/connection.js.js');

// Planning Schema
const planningRow = new mongoose.Schema({
    activity: String,
    type: String,
    website: String,
    address: String,
    interest: Number
}, {timestamps: true})

// Scheduling Schema
const schedulingRow = new mongoose.Schema({
    activity: String,
    type: String,
    website: String,
    address: String
}, {timestamps: true})

//Itinerary Schema
const itinerarySchema = new mongoose.Schema({
    users: [String],
    location: String,
    dates: [String],
    planning: [planningRow],
    scheduling: [[schedulingRow]] 
}, {timestamps: true});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);
module.exports = Itinerary;
                
  