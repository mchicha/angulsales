const express = require('express');
const router = express.Router();

var comment = require('../data_access/commentMmodel');

// router - type of middleware function
// An object to which several server requests can be assigned to

router.get('/', async (req, res) => {
    res.send(JSON.stringify(await comment.getAllRows()));    
})

module.exports = router;