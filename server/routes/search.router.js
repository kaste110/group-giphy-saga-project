const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/', (req, res) => {
    axios.get(`api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_CODE}&q=${req.body}`)
    .then( response => {
        console.log(response.data);
        res.send(response.data);
    }).catch ( error => {
        res.sendStatus(500);
    })
})

module.exports = router;