const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

//load routes

const items = require("./routes/api/items");

//body parser middleware
app.use(bodyParser.json());

//db config
const dbConfig = require("./config/config").mongoURI;

//connect to the momgo DB
mongoose
  .connect(dbConfig, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongo DB Connected...................");
  })
  .catch((err) => {
    console.log("Error while connecting to the db", err);
  });

//use routes
app.use("/api/items", items);

//set client app in the production eviorement

if (process.env.NODE_ENV === "production") {
  //set the static folder

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//define port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}...........`);
});
