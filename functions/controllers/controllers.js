const firebase = require("../fbase");

exports.postUpdateData = (request, response) => {
  console.log("HTTP POST Request");
  let dbArr = request.body;
  let refPath = "/testi/";
  let dbRef = firebase.database().ref(refPath);

  for (let db of dbArr) {
    dbRef.push(db, function(error) {
      if (error) {
        console.log("Data could not be saved." + error);
      } else {
        console.log("Data saved successfully.");
        response.end();
      }
    });
  }
};

exports.welcomePage = (request, response) => {
  console.log("HTTP POST Request");
  response.send("Hello from Firebase!");
};
