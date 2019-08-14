const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

const appRoutes = require("./routes/routes");

app.use(appRoutes);

exports.app = functions.https.onRequest(app);

//--------------------------------------------------------------------------------
//from functions fold: firebase serve --only functions,hosting
// app.get("/test", (request, response) => {
//   response.send("Hello from Firebase!");
// });
