import path from "path";
const Job = require('./models/job');

// Get the packages we need
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    secrets = require('./config/secrets');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

mongoose.connect(secrets.mongo_connection,  { useNewUrlParser: true });

console.log(path.join(__dirname, "..", "client", "build", "index.html"));

// Serve the React static files after build
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("/api/jobs", (req, res) => {
  Job.find().exec( function (err, jobs) {
    if (err) {
        res.status(500);
        res.json({message: "Unable to find jobs", data: "" });
    } else {
        res.status(200);
        res.json({ message: 'OK', data: jobs });
    }
  });
});

// All other unmatched requests will return the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
