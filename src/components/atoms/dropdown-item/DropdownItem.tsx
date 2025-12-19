import React, { type ComponentPropsWithoutRef } from "react";

import { Icon } from "../icon/Icon";
import styles from "./styles.module.css";
import clsx from "clsx";

export interface DropdownItemProps extends ComponentPropsWithoutRef<"li"> {
  label: string;
  icon?: "city" | "hotel";
  imageSrc?: string;
  className?: string;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  icon,
  imageSrc,
  className,
  ...props
}) => {
  return (
    <li className={clsx(styles.dropdownItem, className)} {...props}>
      {icon && <Icon name={icon} size={20} />}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={label}
          style={{ width: 20, height: 14, objectFit: "cover" }}
        />
      )}
      <span>{label}</span>
    </li>
  );
};
