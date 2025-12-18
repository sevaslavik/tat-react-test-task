export type DropdownItemData = {
  id: string | number;
  label: string;
  type: "country" | "city" | "hotel";
  icon?: "city" | "hotel";
  imageSrc?: string;
};
