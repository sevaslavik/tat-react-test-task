import type { City, Country, Hotel } from "./types";

type GeoEntity =
  | (Country & { type: "country" })
  | (City & { type: "city" })
  | (Hotel & { type: "hotel" });

export type GeoResponse = Record<string, GeoEntity>;
