import { create } from "zustand";
import type { Country } from "../entities/geo/types";

interface PricesState {
  country: Country | null;
  setCountry: (country: Country) => void;
  clearCountry: () => void;
}

export const useCountryStore = create<PricesState>((set) => ({
  country: null,
  setCountry: (country: Country) => set({ country }),
  clearCountry: () => set({ country: null }),
}));
