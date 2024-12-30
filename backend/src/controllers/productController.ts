import { Request, Response } from "express";
import products from "../data/sampleData.json";

export const getAllProducts = (req: Request, res: Response) => {
  // SEND RESPONSE
  res.status(200).json(products);
};
