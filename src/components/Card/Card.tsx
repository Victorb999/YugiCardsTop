import { useState } from "react"
import { CardType } from "../../containers/Cards/types"
import { useAtom } from "jotai"
import { CardFull } from "../CardFull/CardFull"
import { SelectedCardAtom } from "../../store/store"
interface CardProps {
  card: CardType
}

export const Card = ({ card }: CardProps) => {
  const [showFull, setShowFull] = useState(false)
  const [selectedCard, setSelectedCard] = useAtom(SelectedCardAtom)
  const img = card.card_images[0].image_url

  const borderSelected =
    card.id === selectedCard.id ? "border-2 border-rose-500" : ""

  return (
    <div className={`p-2 w-[190px] ${borderSelected}`}>
      <img
        className="cursor-pointer"
        src={img}
        alt={card.name}
        title={card.name}
        onDoubleClick={() => setShowFull(true)}
        onClick={() => setSelectedCard(card)}
      />
      {showFull && (
        <div
          className="h-screen w-screen flex-col flex items-center justify-center
        absolute top-0 left-0"
        >
          <div
            className="h-screen w-screen bg-[#000000cc] 
            absolute top-0 left-0 transition-opacity duration-700 ease-in-out"
            onClick={() => setShowFull(false)}
          >
            <button
              className="text-xl px-2 m-2 bg-red-700 
            absolute top-2 right-2
            rounded-full text-gray-100 hover:bg-gray-500 "
              onClick={() => setShowFull(false)}
            >
              X
            </button>
          </div>
          <CardFull height="614px" width="421px" id={card.id}>
            <>
              <img
                src={img}
                alt={card.name}
                title={card.name}
                onClick={() => setShowFull(true)}
              />
            </>
          </CardFull>
        </div>
      )}
    </div>
  )
}
