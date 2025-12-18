import React from "react";
import { Icon } from "../icon/Icon";

export interface DropdownItemProps {
  label: string;
  icon?: "city" | "hotel";
  imageSrc?: string;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  icon,
  imageSrc,
}) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "4px 8px",
        cursor: "pointer",
      }}
    >
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
