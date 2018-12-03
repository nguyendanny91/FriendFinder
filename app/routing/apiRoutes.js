var friendsData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friendsGET", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friendsPOST", function (req, res) {
        friendsData.push(req.body);
        res.json(true);
    })


}
