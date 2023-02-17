const express = require ('express');
const router = express.Router();
const axios = require ('axios');
require('dotenv').config();

router.get('/', (req, res) => {
    console.log('inside the get route');
    
    //request to 3rd party API - giphy
    axios.get(`api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}`)
    //hide your API key with .env file and .gitignore

    .then((response) => {
        res.send(response.data);
    }).catch(err => {
        console.log('error with get request to giphy: ', err)
        res.sendStatus(500);
    })
});

module.exports = router;