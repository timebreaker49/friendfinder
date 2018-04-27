let api = function () {
    this.getFriends = function (app, friends) {
        app.get('/api/friends', (req, res) => res.json(friends))
    }

    this.newFriends = function (app, friends) {
        app.post('/api/friends', function (req, res) {
            let newFriend = req.body;
            let newScores = newFriend.scores;
            console.log(newScores);
            let totalDifferencesArray = [];
            let randomAssArray = [];
            let totalDiff = 0;
            let count = 0;
            // compares absolute value of scores of each user with existing users and pushes total differences to array
            for (i = 0; i < friends.length; i++) {
                for (j = 0; j < newScores.length; j++) {
                    totalDiff += Math.abs(parseInt(newScores[j]) - parseInt(friends[i].scores[j]));
                }
                count++;
                totalDifferencesArray.push(totalDiff);
                // this moves the first input of the total differences array to a new array 
                // (because the logic of the loop below doesn't capture the first value)
                if (count === 1) {
                    randomAssArray.push(totalDifferencesArray[0]);
                }
                console.log("count: " + count + " length: " + totalDifferencesArray.length + " diff: " + totalDifferencesArray);
            }
            // calculates the absolute value for each one of the entries in the total differences array
            for (g = 0; g < totalDifferencesArray.length - 1; g++) {
                let abs = (totalDifferencesArray[g + 1]) - totalDifferencesArray[g];
                randomAssArray.push(abs);
                console.log(randomAssArray);
            }
            // returns a match for the index of the lowest number from the array
            let match = randomAssArray.indexOf(Math.min.apply(Math, randomAssArray));
            console.log(match);
            // I love for loops -- this one parses the user's score selections as integers before pushing a new object to the array
            for (var i = 0; i < newScores.length; i++) {
                newScores[i] = parseInt(newScores[i]);
            }
            // pushes the user input to the friends array
            friends.push(newFriend);
            console.log(friends);
            res.json(friends[match]);
        })
    }
}

module.exports = api;