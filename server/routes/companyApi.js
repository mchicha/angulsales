const express = require('express');
const router = express.Router();

var company = require('../dataAccess/companyMmodel');

// router - type of middleware function
// An object to which several server requests can be assigned to

router.get('/', async (req, res) => {
    res.send(JSON.stringify(await company.getAllRows()));    
})

module.exports = router;