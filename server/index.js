const express = require("express");
require("dotenv").config();
const cors = require("cors");
const massive = require("massive");
const path = require("path");
const getFaceProductsRouter = require("./router/getFaceProducts");

// require("dotenv").config({
//   path: path.join(__dirname, "./.env"),
// });

const { CONNECTION_STRING, PORT } = process.env;

console.log(PORT);

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", getFaceProductsRouter);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set("db", dbInstance);
  console.log("db connected");
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT} `);
});
