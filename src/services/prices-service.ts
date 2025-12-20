import { getSearchPrices, startSearchPrices } from "../API/api";
import type { StartSearchResponse } from "../API/baseAPITypes";
import type { ErrorResponse } from "../entities/error/error.types";
import type { GetSearchPricesResponse } from "../entities/prices/prices.types";
import { ApiErrorHandler } from "./error-handler-service";

export class PricesService {
  static async startSearch(countryId: string): Promise<StartSearchResponse> {
    const res = await startSearchPrices(countryId);
    return res.json();
  }

  static async fetchSearchPrices(
  token: string,
  retries = 2
): Promise<GetSearchPricesResponse> {
  let attempt = 0;

  while (attempt <= retries) {
    try {
      const res = await getSearchPrices(token);
      return await res.json();
    } catch (err) {
      if (!(err instanceof Response)) throw err;

      const error: ErrorResponse = await err.json();

      const waitUntil = ApiErrorHandler.handleErrorResponse(error);
      
      if (typeof waitUntil === "number") {
        attempt++;
        if (attempt > retries) throw new Error("Search prices still not ready");

        const delay = Math.max(waitUntil - Date.now(), 0);
        await new Promise((r) => setTimeout(r, delay));
        continue;
      }
    }
  }

  throw new Error("Unreachable state");
}
}
