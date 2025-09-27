// utils/price.ts
export const normalizePrice = (price: number | string): number => {
  if (typeof price === "string") {
    const cleaned = price.replace(/[^0-9.]/g, "");
    return Number(cleaned) || 0;
  }
  return price;
};
