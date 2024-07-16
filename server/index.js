import express from "express";
import connect from "./src/utils/connectMongoDb.js";
const app = express();

app.use(express.json());

app.listen(3000, async () => {
  await connect();
  console.log("http://localhost:3000");
});
