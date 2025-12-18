import clsx from "clsx";
import { TextInput } from "../../atoms/text-input";
import { Typography } from "../../atoms/typography";

import styles from "./styles.module.css";
import { Button } from "../../atoms/button";
import { DropdownList } from "../../molecules/dropdown-list/DropdownList";
import { useRef, useState } from "react";
import type { DropdownItemProps } from "../../atoms/dropdown-item/DropdownItem";

const items: DropdownItemProps[] = [
  { label: "Paris", icon: "city", imageSrc: "https://flagcdn.com/fr.svg" },
  { label: "London", icon: undefined, imageSrc: "https://flagcdn.com/gb.svg" },
  { label: "Hotel Ritz", icon: "hotel" },
  { label: "Grand Budapest Hotel", icon: "hotel" },
];

export const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  return (
    <form className={clsx(styles.form)}>
      <Typography variant="h2">Форма пошуку турів</Typography>
      <TextInput ref={inputRef} onClick={() => setOpen(!open)} />
      <DropdownList items={items} open={open} referenceRef={inputRef} />
      <Button>Знайти</Button>
    </form>
  );
};
