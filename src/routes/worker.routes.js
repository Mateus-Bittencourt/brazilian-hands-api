import { Router } from "express";
import workerController from "../controllers/worker.controller.js";
import { validate } from "../middlewares/validation.middlewares.js";
import { workerSchema } from "../schema/worker.schema.js";

const router = Router();

router.post(
    "/workers",
    validate(workerSchema),
    workerController.createWorker
);

export default router;
