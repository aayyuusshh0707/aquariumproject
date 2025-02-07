import express from "express";
const app = express();
import dotenv from "dotenv";
import checkConnection from "./src/config/db.js";

dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await checkConnection();
});
