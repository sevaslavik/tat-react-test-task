import { PricesService } from "../services/prices-service";
import type { PriceOffer } from "../entities/prices/prices.types";
import { usePricesStore } from "../store/price.store";
import { usePricesUIStore } from "../store/pricesUI.store";

export const useSearchPrices = () => {
  const { state, setState } = usePricesUIStore();
  const { setPrices, clearPrices } = usePricesStore();

  const searchPrices = async (countryId: string) => {
    setState({ status: "loading" });
    clearPrices();

    try {
      const { token } = await PricesService.startSearch(countryId);

      const result = await PricesService.fetchSearchPrices(token);

      

      const pricesArray: PriceOffer[] = Object.values(result.prices);
      console.log("pricesArray", pricesArray);
      if (pricesArray.length === 0) {
        setState({ status: "empty" });
        return;
      }

      setPrices(pricesArray);
      setState({ status: "success", data: pricesArray });
    } catch (err) {
      setState({
        status: "error",
        message:
          err instanceof Error ? err.message : "Не вдалося отримати ціни",
      });
    }
  };

  return {
    state,
    searchPrices,
  };
};
