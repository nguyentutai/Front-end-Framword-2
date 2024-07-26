import express from "express";
import connect from "./src/utils/connectMongoDb.js";
import router from "./src/routes/index.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(3000, async () => {
  await connect();
  console.log("http://localhost:3000");
});
