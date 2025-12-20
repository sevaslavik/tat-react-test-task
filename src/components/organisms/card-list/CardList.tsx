import clsx from "clsx";
import type { HotelWithPrices } from "../../../types/hotelWithPrices.state";
import { HotelCard } from "../../molecules/hotel-card/HotelCard";
import styles from "./styles.module.css"

type CardListProps = {
  cards: HotelWithPrices[];
  countryFlag?: string;
};

export const CardList = ({ cards, countryFlag }: CardListProps) => {
  return (
    <div className={clsx(styles.cardList)}>
      {cards.map((card) => (
        <HotelCard hotel={card} key={card.id} countryFlag={countryFlag ?? ""} />
      ))}
    </div>
  );
};
