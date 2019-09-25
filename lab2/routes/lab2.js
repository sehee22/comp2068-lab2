﻿'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    let result;

    switch (req.query.method) {
        case 'add':
            result = parseInt(req.query.x) + parseInt(req.query.y);
            res.send(req.query.x + ' + ' + req.query.y + ' = ' + result);
            break;
        case 'subtract':
            result = parseInt(req.query.x) - parseInt(req.query.y);
            res.send(req.query.x + ' - ' + req.query.y + ' = ' + result);
            break;
        case 'multiply':
            result = parseInt(req.query.x) * parseInt(req.query.y);
            res.send(req.query.x + ' * ' + req.query.y + ' = ' + result);
            break;
        case 'divide':
            result = parseInt(req.query.x) / parseInt(req.query.y);
            res.send(req.query.x + ' / ' + req.query.y + ' = ' + result);
            break;
        default:
            res.send('Input proper method');
            break;
    }
    /*
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
    */
});

module.exports = router;
