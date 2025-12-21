import clsx from "clsx";
import { TextInput } from "../../atoms/text-input";
import { Typography } from "../../atoms/typography";

import styles from "./styles.module.css";
import { Button } from "../../atoms/button";
import { DropdownList } from "../../molecules/dropdown-list/DropdownList";
import { useRef } from "react";
import { useGeoSearch } from "../../../hooks/useGeoSearch";
import { useSearchPrices } from "../../../hooks/usePrices";

export const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    query,
    setQuery,
    searchResults,
    open,
    value,
    setOpen,
    handleSelect,
    handleFocus,
  } = useGeoSearch();

  const { state, searchPrices } = useSearchPrices();

  const onHandleFocus = () => {
    setOpen(true);
    handleFocus();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      await searchPrices(value.id.toString());
    }
  };

  return (
    <form className={clsx(styles.form)} onSubmit={(e) => handleSubmit(e)}>
      <Typography variant="h2">Форма пошуку турів</Typography>
      <TextInput
        ref={inputRef}
        value={query}
        className={styles.searchField}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={onHandleFocus}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
      />
      <DropdownList
        items={searchResults ?? []}
        open={open}
        referenceRef={inputRef}
        onSelect={(option) => handleSelect(option)}
      />
      <Button
        disabled={state.status === "loading"}
        type="submit"
        className={styles.btn}
      >
        Знайти
      </Button>
    </form>
  );
};
