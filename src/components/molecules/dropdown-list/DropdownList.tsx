// components/molecules/DropdownList.tsx
import React, { useRef, useEffect } from "react";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react";
import {
  DropdownItem,
  type DropdownItemProps,
} from "../../atoms/dropdown-item/DropdownItem";
import clsx from "clsx";
import styles from "./styles.module.css";

interface DropdownListProps {
  items: DropdownItemProps[];
  open: boolean;
  referenceRef: React.RefObject<HTMLElement | null>; // ссылка на Input или любой элемент
}

export const DropdownList: React.FC<DropdownListProps> = ({
  items,
  open,
  referenceRef,
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
        <DropdownItem key={item.label} {...item} />
      ))}
    </ul>
  );
};
