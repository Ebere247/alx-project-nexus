import { NextApiRequest, NextApiResponse } from "next";
import { products } from "@/constants/products";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const productId = Number(id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.status(200).json(product);
}
