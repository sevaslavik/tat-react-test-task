import { useState, useEffect } from "react";
import { GeoService } from "../services/geo-service";
import type { DropdownItemData } from "../entities/geo/dropdown.types";

export const useGeoSearch = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<DropdownItemData[]>();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<DropdownItemData>();

  const handleSelect = (searchQuery: DropdownItemData): void => {
    setValue(searchQuery);
    setQuery(searchQuery.label);
  };

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

  const fetchResults = async () => {
    const results = await GeoService.search(query);
    setSearchResults(results);
  };

  const handleFocus = async () => {
    console.log("value", value)
    if (!value || value?.type === "country") {
      await loadCountries();
    } else {
      await fetchResults();
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadCountries();
  }, []);

  useEffect(() => {
    if (!query) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchResults();
  }, [query]);

  return {
    query,
    setQuery,
    searchResults,
    open,
    setOpen,
    handleSelect,
    handleFocus
  };
};
