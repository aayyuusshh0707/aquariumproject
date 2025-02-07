import express from "express";
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
import userRoutes from "./src/routes/user.routes.js";

app.use("api/users", userRoutes);

export default app;
