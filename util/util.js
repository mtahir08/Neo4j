module.exports = function (app, neo4j, db) {
    app.get('/', function (req, res) {
        res.render('../client/index.html');
    });
    app.get('/home', function (req, res) {

        loop().then(function () {
            res.send(arr);
            console.log(arr);

        });
    });
    app.post('/add', function (req, res) {
        console.log(req.body.item);
        db.insertNode(req.body, function (err, node) {

            if (err) res.json(err);

            // Output node properties.
            console.log(node.data);

            // Output node id.
            console.log(node._id);
            res.json(node);
        });

    });
    var arr = [];
    function loop() {
        for (var i = 191; i < 210; i++) {
            db.readNode(i, function (err, node) {
                arr.push(node);
            });
        }
    }

};




