import { Router } from "express";
import customerController from "../controllers/customer.controller.js";
import { validate } from "../middlewares/validation.middlewares.js";
import { customerSchema } from "../schema/customer.schema.js";

const router = Router();

router.put(
  "/customers",
  validate(customerSchema),
  customerController.createOrUpdateCustomer
);

export default router;
