//Dependencies
const express = require('express');
const router = express.Router();
const Itinerary = require('../models/itinerary.js');

//Routes

router.get('/', (req, res) => {
    res.send('test');
})

module.exports = router; 