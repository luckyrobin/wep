var pool = require('./db');
var useDbSql = 'USE emp';

function Question(question) {
    this.topic = ( question && question.topic) || null;
    this.topic_image = (question && question.topic_image ) || null;
    this.options = (question && question.options ) || null;
    this.anwser = (question && question.anwser) || null;
}

module.exports = Question;
pool.getConnection(function (err, connection) {
    connection.query(useDbSql, function (err) {
        if (err) {
            console.log("USE Error: " + err.message);
            return;
        }
        console.log('USE succeed');
    });

    Question.prototype.getlist = function (callback) {
        var getQuertion_Sql = "select * from question limit 0,5";
        connection.query(getQuertion_Sql, function (err, result) {
            if (err) {
                console.error('CONNECTION error: ', err);
                err = err.code;
                result = 'error';
            }
            callback(err, result);
        });
    };

    Question.prototype.save = function save(callback) {
        var question = {
            topic: this.topic,
            topic_image: this.topic_image,
            options: this.options,
            anwser: this.anwser
        };

        var insertQuestion_Sql = "INSERT INTO question(qid,topic,topic_image,options,anwser) VALUES(0,?,?,?,?)";
        connection.query(insertQuestion_Sql, [question.topic, question.topic_image, question.options, question.anwser], function (err, result) {
            if (err) {
                console.error('CONNECTION error: ', err);
                err = err.code;
                result = 'error';
            }

            connection.release();
            callback(err, result);
        });
    };
});