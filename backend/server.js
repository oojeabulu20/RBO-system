const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port: ${port}`));