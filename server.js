import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import exampleRouter from "./routes/example.router.js";
import { errorHandler, notFound } from "./middlewares/error.middleware.js";

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5001;

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/api/example", exampleRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
