import { CardType } from "../containers/Cards/types";

interface CardProps {
  card: CardType;
}

export const Card = ({ card }: CardProps) => {
  const img = card.card_images[0].image_url;
  return (
    <div className="p-2 w-1/4">
      <img src={img} alt={card.name} title={card.name} />
    </div>
  );
};
