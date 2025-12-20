import clsx from "clsx";

import { Image } from "../../atoms/image/Image";
import { Typography } from "../../atoms/typography/Typography";
import styles from "./styles.module.css";
import type { HotelWithPrices } from "../../../types/hotelWithPrices.state";
import { formatDate } from "../../../helpers/formatDate";

interface HotelCardProps {
  hotel: HotelWithPrices;
  className?: string;
  countryFlag: string;
}

export const HotelCard = ({
  hotel,
  className,
  countryFlag,
}: HotelCardProps) => {
  return (
    <div className={clsx(styles.card, className)}>
      <Image src={hotel.img} alt={hotel.name} />

      <Typography className={styles.title} variant="h3">{hotel.name}</Typography>
      <div className={styles.location}>
        {countryFlag && (
          <img
            src={countryFlag}
            alt={hotel.countryName}
            className={styles.flag}
          />
        )}
        <Typography variant="bodySm">
          {hotel.cityName}, {hotel.countryName}
        </Typography>
      </div>

      {hotel.prices && (
        <div className={styles.price}>
          <Typography variant="bodySm">Старт туру :</Typography>
          <Typography variant="bodySm">
            {formatDate(hotel.prices?.[0]?.startDate) ?? "Дата не зазначена"}
          </Typography>
          <Typography variant="h3">
            {hotel.prices[0].amount} {hotel.prices[0].currency.toUpperCase()}
          </Typography>
        </div>
      )}
      <a className={styles.link} href="1234">
        Відкрити ціну
      </a>
    </div>
  );
};
