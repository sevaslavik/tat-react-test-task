type PriceOffer = {
  id: string; // UUID
  amount: number; // 1500–4000
  currency: "usd"; // нижній регістр за поточною реалізацією
  startDate: string; // YYYY-MM-DD (сьогодні +2..5)
  endDate: string; // YYYY-MM-DD (start +4..7)
  hotelID?: string; // додається в результатах пошуку цін
};

type PricesMap = Record<string, PriceOffer>;

export type GetSearchPricesResponse = {
  prices: PricesMap;
};
