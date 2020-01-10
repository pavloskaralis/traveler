//Dependencies
const mongoose = require('../db/connection.js');

//Schema
const itinerarySchema = new mongoose.Schema({
    users: [String],
    location: String,
    dates: [String],
    planning: [
            {
                activity: String,
                type: String,
                website: String,
                address: String,
                interest: Number
            }
        ],
    scheduling: [
        [
            {
                activity: String,
                type: String,
                website: String,
                address: String
            }
        ]
    ] 
}, {timestamps: true});

const Itinerary = mongoose.model('Itinerary', userSchema);
module.exports = Itinerary;