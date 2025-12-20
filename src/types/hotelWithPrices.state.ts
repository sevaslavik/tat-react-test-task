import type { Hotel } from "../entities/geo/types";
import type { PriceOffer } from "../entities/prices/prices.types";

export interface HotelWithPrices extends Hotel {
  prices?: PriceOffer[];
}
