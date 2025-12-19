import { useState, useEffect } from "react";
import { GeoService, } from "../services/geo-service";
import type { DropdownItemData } from "../entities/geo/dropdown.types";

export const useGeoSearch = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<DropdownItemData[]>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const loadCountries = async () => {
      const countries = await GeoService.fetchCountries();
      const dropdownItems = countries.map((c) => ({
        id: c.id,
        label: c.name,
        type: "country" as const,
        imageSrc: c.flag,
      }));
      setSearchResults(dropdownItems);
    };
    loadCountries();
  }, []);

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      const results = await GeoService.search(query);
      setSearchResults(results);
    };

    fetchResults();
  }, [query]);

  return {
    query,
    setQuery,
    searchResults,
    open,
    setOpen,
  };
};
