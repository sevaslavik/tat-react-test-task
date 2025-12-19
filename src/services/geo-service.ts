import { getCountries, searchGeo } from "../API/api";
import type { DropdownItemData } from "../entities/geo/dropdown.types";
import type { GeoResponse } from "../entities/geo/serach.types";
import type { CountriesMap, Country } from "../entities/geo/types";

export class GeoService {
  static async fetchCountries(): Promise<Country[]> {
    const res = await getCountries();
    const data: CountriesMap = await res.json();
    return Object.values(data);
  }

  static async search(query: string): Promise<DropdownItemData[]> {
    const res = await searchGeo(query);
    const data: GeoResponse = await res.json();

    return Object.values(data).map((item): DropdownItemData => {
      switch (item.type) {
        case "country":
          return {
            id: item.id,
            label: item.name,
            type: "country",
            imageSrc: item.flag,
          };
        case "city":
          return {
            id: item.id,
            label: item.name,
            type: "city",
            icon: "city",
          };
        case "hotel":
          return {
            id: item.id,
            label: item.name,
            type: "hotel",
            icon: "hotel",
          };
      }
    });
  }
}
