const express = require('express');
const router = express.Router();

var customer = require('../data_access/customerMmodel');

// router - type of middleware function
// An object to which several server requests can be assigned to

router.get('/', async (req, res) => {
    res.send(JSON.stringify(await customer.getAllRows()));    
})

module.exports = router;