import { useState } from "react";
import { CardType } from "../containers/Cards/types";
import { CardFull } from '../CardFull/CardFull'
interface CardProps {
  card: CardType;
}

export const Card = ({ card }: CardProps) => {
  const [showFull, setShowFull] = useState(false);
  const img = card.card_images[0].image_url;
  return (
    <div className="p-2 w-1/4">
      <img
        className='cursor-pointer'
        src={img}
        alt={card.name}
        title={card.name}
        onClick={() => setShowFull(true)}
      />
      {showFull && (
        <div
          className="h-screen w-screen flex-col
            bg-[#000000cc] flex items-center justify-center
            absolute top-0 left-0 transition-opacity duration-700            
        "
        >
          <button
            className="text-xl px-2 m-2 bg-red-700 
            ml-[20%]
            rounded-full text-gray-100 hover:bg-gray-500 "
            onClick={() => setShowFull(false)}
          >
            X
          </button>
          <CardFull height="614px" width="421px" id={card.id}>
            <>
                <img
                    src={img}
                    alt={card.name}
                    title={card.name}
                    onClick={() => setShowFull(true)}
                />
            </>
          </ CardFull>
        </div>
      )}
    </div>
  );
};
