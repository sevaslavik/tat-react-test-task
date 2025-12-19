import clsx from "clsx";
import { TextInput } from "../../atoms/text-input";
import { Typography } from "../../atoms/typography";

import styles from "./styles.module.css";
import { Button } from "../../atoms/button";
import { DropdownList } from "../../molecules/dropdown-list/DropdownList";
import { useRef } from "react";
import { useGeoSearch } from "../../../hooks/useGeoSearch";

export const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { query, setQuery, searchResults, open, setOpen } = useGeoSearch();

  return (
    <form className={clsx(styles.form)}>
      <Typography variant="h2">Форма пошуку турів</Typography>
      <TextInput
        ref={inputRef}
        value={query}
        className={styles.searchField}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
      />
      <DropdownList
        items={searchResults ?? []}
        open={open}
        referenceRef={inputRef}
      />
      <Button className={styles.btn}>Знайти</Button>
    </form>
  );
};
