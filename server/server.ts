import express from "express";
import path from "path";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

console.log(path.join(__dirname, "..", "client", "build", "index.html"));

// Serve the React static files after build
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello" });
});

// All other unmatched requests will return the React app
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
