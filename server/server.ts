import express from "express";
import path from "path";
import mongoose from "mongoose";
import secrets from "./config/secrets";
import routes from "./routes";

const router = express.Router();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

mongoose.connect(secrets.mongo_connection);

// Allow CORS so that backend and frontend could be put on different servers
const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
};
app.use(allowCrossDomain);

// Serve the React static files after build
app.use(express.static(path.join(__dirname, "..", "client", "build")));


// Use routes as a module (see index.js)
routes(app, router, path);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
