//var Question = require('../models/questionModel');

exports.getQuestion = function(req, res) {
    res.render('answer', { title: '问与答' });
};