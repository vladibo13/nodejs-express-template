import express from "express";
import { exampleHandler } from "../controllers/example.controller.js";

const router = express.Router();

router.route("").get(exampleHandler);

export default router;
