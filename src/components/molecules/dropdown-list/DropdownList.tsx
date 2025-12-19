// components/molecules/DropdownList.tsx
import React, { useRef, useEffect } from "react";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react";
import { DropdownItem } from "../../atoms/dropdown-item/DropdownItem";
import clsx from "clsx";
import styles from "./styles.module.css";
import type { DropdownItemData } from "../../../entities/geo/dropdown.types";

interface DropdownListProps {
  items: DropdownItemData[];
  open: boolean;
  referenceRef: React.RefObject<HTMLElement | null>;
  onSelect: (item: DropdownItemData) => void;
}

export const DropdownList: React.FC<DropdownListProps> = ({
  items,
  open,
  referenceRef,
  onSelect,
}) => {
  const floatingRef = useRef<HTMLUListElement>(null);

  const { refs } = useFloating({
    placement: "bottom-start",
    middleware: [offset(4), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  useEffect(() => {
    if (referenceRef.current && floatingRef.current) {
      refs.setReference(referenceRef.current);
      refs.setFloating(floatingRef.current);
    }
  }, [refs, referenceRef]);

  if (!open) return null;

  return (
    <ul ref={floatingRef} className={clsx(styles.dropdownList)}>
      {items.map((item) => (
        <DropdownItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          imageSrc={item.imageSrc}
          onClick={() => onSelect(item)}
        />
      ))}
    </ul>
  );
};
