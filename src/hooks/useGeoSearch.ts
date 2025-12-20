import { useState, useEffect, useCallback } from "react";
import { GeoService } from "../services/geo-service";
import type { DropdownItemData } from "../entities/geo/dropdown.types";
import { useCountryStore } from "../store/country.store";

export const useGeoSearch = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<DropdownItemData[]>();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<DropdownItemData>();
  const { setCountry } = useCountryStore();

  const handleSelect = (searchQuery: DropdownItemData): void => {
    setCountry({
      id: searchQuery.id as string,
      name: searchQuery.label,
      flag: searchQuery.imageSrc as string,
    });
    setValue(searchQuery);
    setQuery(searchQuery.label);
  };

  const loadCountries = useCallback(async () => {
    const countries = await GeoService.fetchCountries();
    setSearchResults(
      countries.map((c) => ({
        id: c.id,
        label: c.name,
        type: "country" as const,
        imageSrc: c.flag,
      }))
    );
  }, []);

  const fetchResults = useCallback(async () => {
    const results = await GeoService.search(query);
    setSearchResults(results);
  }, [query]);

  const handleFocus = async () => {
    if (!value || value?.type === "country") {
      await loadCountries();
    } else {
      await fetchResults();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await loadCountries();
    };

    fetchData();
  }, [loadCountries]);

  useEffect(() => {
    if (!query) return;
    const fetchSearch = async () => {
      fetchResults();
    };
    fetchSearch();
  }, [query, fetchResults]);

  return {
    query,
    setQuery,
    searchResults,
    value,
    open,
    setOpen,
    handleSelect,
    handleFocus,
  };
};
