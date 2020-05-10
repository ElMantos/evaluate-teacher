const functions = require("firebase-functions");
const fetchData = require("./crawler/index");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.fetchData = functions.https.onRequest((request, response) => {
  fetchData(data => {
    response.send(JSON.stringify(data));
  });
});
