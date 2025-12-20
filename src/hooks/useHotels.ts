import { useState } from "react";
import { HotelSearchService } from "../services/hotel-search-service";
import type { Hotel } from "../entities/geo/types";
import type { HotelWithPrices } from "../types/hotelWithPrices.state";
import type { PriceOffer } from "../entities/prices/prices.types";
import { usePricesStore } from "../store/price.store";

export const useHotels = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const { prices } = usePricesStore();
  const [hotelsWithPrices, setHotelsWithPrices] = useState<HotelWithPrices[]>(
    []
  );
  const searchHotels = async (hotelId: string) => {
    const hotels = await HotelSearchService.fetchHotels(hotelId);
    pricedHotels(Object.values(hotels))
    setHotels(Object.values(hotels));
  };

  const pricedHotels = async (hotelsEnterys: Hotel[]) => {
    const pricesByHotel: Record<string, PriceOffer[]> = prices.reduce(
      (acc, p) => {
        if (!p.hotelID) return acc;
        if (!acc[p.hotelID]) acc[p.hotelID] = [];
        acc[p.hotelID].push(p);
        return acc;
      },
      {} as Record<string, PriceOffer[]>
    );

    const updatedHotels: HotelWithPrices[] = hotelsEnterys.map((h) => ({
      ...h,
      prices: pricesByHotel[h.id] || [],
    }));

    setHotelsWithPrices(updatedHotels);
  };

  return { hotels, hotelsWithPrices, searchHotels, pricedHotels };
};
