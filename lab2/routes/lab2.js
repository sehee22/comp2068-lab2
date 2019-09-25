'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    if (req.query.method == 'add') {
        let result = parseInt(req.query.x) + parseInt(req.query.y);
        res.send(req.query.x + ' + ' + req.query.y + ' = ' + result)
    }
    else if (req.query.method == 'subtract') {
        let result = parseInt(req.query.x) - parseInt(req.query.y);
        res.send(req.query.x + ' - ' + req.query.y + ' = ' + result)
    }
    else if (req.query.method == 'multiply') {
        let result = parseInt(req.query.x) * parseInt(req.query.y);
        res.send(req.query.x + ' * ' + req.query.y + ' = ' + result)
    }
    else if (req.query.method == 'divide') {
        let result = parseInt(req.query.x) / parseInt(req.query.y);
        res.send(req.query.x + ' / ' + req.query.y + ' = ' + result)
    }
    else {
        res.send('Input proper method');
    }
});

module.exports = router;
