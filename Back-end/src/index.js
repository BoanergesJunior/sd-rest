const express = require("express");
const routes = require("./routes");
const cors = require("cors");
require("./database");

const port = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(port, () => console.log(`Listening on port ${port}!`));
