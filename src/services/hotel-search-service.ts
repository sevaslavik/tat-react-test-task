import { getHotels } from "../API/api";

export class HotelSearchService {
  static async fetchHotels(countryId: string) {
    const resp = await getHotels(countryId);
    const hotels = await resp.json();
    return hotels;
  }
}
