// pages/api/products/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { products as constantProducts } from "@/constants/products";
import { Product } from "@/interfaces";

interface ErrorResponse {
  error: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | ErrorResponse>
) {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    let filtered = [...constantProducts];

    const { category, availability, minPrice, maxPrice, sort } = req.query;

    // 1️ Category filter
    if (typeof category === "string" && category !== "All") {
      filtered = filtered.filter((p) => p.type === category);
    }

    // 2️ Availability filter
    if (typeof availability === "string") {
      if (availability === "in-stock") {
        filtered = filtered.filter((p) =>
          typeof p.availability === "boolean"
            ? p.availability
            : p.availability.toLowerCase().includes("in")
        );
      } else if (availability === "out-of-stock") {
        filtered = filtered.filter((p) =>
          typeof p.availability === "boolean"
            ? !p.availability
            : !p.availability.toLowerCase().includes("in")
        );
      }
    }

    // 3️ Price range filter
    if (minPrice && !isNaN(Number(minPrice))) {
      const min = Number(minPrice);
      filtered = filtered.filter((p) => Number(p.price) >= min);
    }

    if (maxPrice && !isNaN(Number(maxPrice))) {
      const max = Number(maxPrice);
      filtered = filtered.filter((p) => Number(p.price) <= max);
    }

    //  Sorting
    if (typeof sort === "string") {
      if (sort === "Price: Low to High") {
        filtered.sort((a, b) => Number(a.price) - Number(b.price));
      } else if (sort === "Price: High to Low") {
        filtered.sort((a, b) => Number(b.price) - Number(a.price));
      } else if (sort === "Newest") {
        filtered.sort((a, b) => b.id - a.id); // higher id = newer
      }
    }

    //  Return filtered & sorted products
    res.status(200).json(filtered);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
