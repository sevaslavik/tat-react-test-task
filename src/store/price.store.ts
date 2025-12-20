import { create } from "zustand";
import type { PriceOffer } from "../entities/prices/prices.types";

interface PricesState {
  prices: PriceOffer[];
  setPrices: (prices: PriceOffer[]) => void;
  clearPrices: () => void;
}

export const usePricesStore = create<PricesState>((set) => ({
  prices: [],
  setPrices: (prices) => set({ prices }),
  clearPrices: () => set({ prices: [] }),
}));
