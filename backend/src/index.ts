// src/index.ts
import express, { Express, Request, Response, Router } from "express";
import { getAllProducts } from "./controllers/productController";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const router: Router = express.Router();
const port = process.env.PORT || 3000;

router.get("/", getAllProducts);

app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
