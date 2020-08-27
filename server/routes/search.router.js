const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get(`/:id`, (req, res) => {
    console.log('text', req.query, req.params.id, req.params, req.body, process.env.GIPHY_CODE)
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_CODE}&${req.params.id}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        }).catch(error => {
            res.sendStatus(500);
        })
})


module.exports = router;