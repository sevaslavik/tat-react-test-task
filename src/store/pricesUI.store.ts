import { create } from "zustand";
import type { SearchPricesUIState } from "../types/prices.state";

interface PricesUIState {
  state: SearchPricesUIState;
  setState: (state: SearchPricesUIState) => void;
}

export const usePricesUIStore = create<PricesUIState>((set) => ({
  state: { status: "idle" },
  setState: (state) => set({ state }),
}));
