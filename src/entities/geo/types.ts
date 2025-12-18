export type Country = {
  id: string;
  name: string;
  flag: string;
};

export type City = {
  id: number;
  name: string;
};

export type Hotel = {
  id: number;
  name: string;
  img: string;
  cityId: number;
  cityName: string;
  countryId: string;
  countryName: string;
};

export type CountriesMap = Record<string, Country>;
export type HotelsMap = Record<string, Hotel>;