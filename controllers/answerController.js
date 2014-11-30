var Question = require('../models/querstionModel');

exports.getQuestion = function (req, res) {
    var question = new Question();
    question.getlist(function (err, result) {
        if (err) {
            res.statusCode = 503;
            res.send({
                result: result,
                err: err
            });
            return;
        }
        res.render('answer', {title: '问与答', data: result});
    });

};

exports.setQuestion = function(req,res){
    var newq = new Question({
        topic: "《兄弟连》讲述了一支______部队空投到欧洲开辟第二战场的故事。",
        topic_image: "http://wxmovie.qq.com/wx/20141120/cai20/img/qa_pic5.jpg",
        options: "['A．潜艇','B．空降兵']",
        anwser: "1"
    });

    newq.save(function (err, result) {
        if (err) {
            res.statusCode = 503;
            res.send({
                result: result,
                err: err
            });
            return;
        }

        res.send("注册成功！");
    });
};

exports.confirmAnswer = function(req,res){
    var answer = req.body;
    console.log(answer);
};