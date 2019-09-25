'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    let result;
    let oper1 = parseInt(req.query.x);
    let oepr2 = parseInt(req.query.y);

    switch (req.query.method) {
        case 'add':
            result = oper1 + oepr2;
            res.send(oper1 + ' + ' + oepr2 + ' = ' + result);
            break;
        case 'subtract':
            result = oper1 - oepr2;
            res.send(oper1 + ' - ' + oepr2+ ' = ' + result);
            break;
        case 'multiply':
            result = oper1 * oepr2;
            res.send(oper1 + ' * ' + oepr2 + ' = ' + result);
            break;
        case 'divide':
            result = oper1 / oepr2;
            res.send(oper1 + ' / ' + oepr2 + ' = ' + result);
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
