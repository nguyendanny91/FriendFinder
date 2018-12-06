var friendsData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friendsGET", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friendsPOST", function (req, res) {
        // Capture Submission Values
        var submissionArray = Object.values(req.body);
        var submissionValues = submissionArray.slice(0,10);

        // Capture Available Values
        var friendsValuesArray = []
        
        for (var i = 0; i < friendsData.length; i++) {
            var friendsArray = Object.values(friendsData[i])

            friendsValuesArray.push(friendsArray.slice(0,10));

        }

        var sum = 0
        var friendTally = []

        for (var k = 0; k < friendsValuesArray.length; k++)
        {
            for (var j = 0; j < submissionValues.length; j++) {
                sum =  sum + Math.abs(submissionValues[j] - friendsValuesArray[k][j])
            }

            friendTally.push(sum);
            sum = 0;

        }

           

        var indexofFriend = friendTally.indexOf(Math.min(...friendTally))

        console.log(friendsData[indexofFriend])

        friendsData.push(req.body);
        res.json(friendsData[indexofFriend]);
    });




}
