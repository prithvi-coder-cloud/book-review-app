// index.js
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Book Review App Running...");
});
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
