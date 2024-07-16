import express from "express";
import connect from "./src/utils/connectMongoDb.js";
import router from "./src/routes/index.js";
const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, async () => {
  await connect();
  console.log("http://localhost:3000");
});
