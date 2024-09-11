import express from "express";
import customerRoutes from "./src/routes/customer.routes.js"

const app = express();

app.use(express.json());
app.use(customerRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
