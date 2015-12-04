module.exports = function (app, neo4j, db) {
    app.get('/', function (req, res) {
        res.render('../client/index.html');
    });


};