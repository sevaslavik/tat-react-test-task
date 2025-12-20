import type { PriceOffer } from "../entities/prices/prices.types";

export type SearchPricesUIState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "empty" }
  | { status: "success"; data: PriceOffer[] };
