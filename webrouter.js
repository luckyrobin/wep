var express = require('express');
var router = express.Router();
var questionController = require('./controllers/answerController');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

/* GET answer. */
router.get('/answer', questionController.getQuestion);

/* GET users listing. */
router.get('/users', function(req, res) {
    res.send('respond with a resource');
});

module.exports = router;