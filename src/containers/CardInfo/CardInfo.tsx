import { useAtom } from "jotai"
import { SelectedCardAtom } from "../../store/store"

export const CardInfo = () => {
  const [selectedCard] = useAtom(SelectedCardAtom)

  if (!selectedCard) {
    return <></>
  }

  return (
    <div className="flex flex-col pb-8 p-4 custom-background-2 sm:w-64 sm:h-[80dvh] h-fit ">
      {selectedCard && (
        <div className="flex flex-col items-start justify-center w-full gap-4">
          <p className="font-bold text-md text-white">{selectedCard.id}</p>
          <p className="font-bold text-md text-[#c99944]">
            {selectedCard.name}
          </p>
          <p className="font-bold text-md text-rose-500">{selectedCard.type}</p>
          <p className="font-bold text-md text-white">{selectedCard.race}</p>
          {selectedCard.level && (
            <p className="font-bold text-md text-white">
              {selectedCard.level} ⭐
            </p>
          )}
          {selectedCard.attribute && (
            <p className="font-bold text-md text-white">
              {selectedCard.attribute}
            </p>
          )}

          <p className="font-bold text-md text-white">
            {selectedCard.card_prices &&
              selectedCard.card_prices.map((price) => {
                return price.cardmarket_price
                  ? `U$ ${price.cardmarket_price}`
                  : `U$ ${price.tcgplayer_price}`
              })}
          </p>
          <p className="font-normal text-xs text-white">{selectedCard.desc}</p>
          {selectedCard.atk && selectedCard.def && (
            <>
              <p className="font-bold text-md text-gray-500">
                ⚔️{selectedCard.atk}
              </p>
              <p className="font-bold text-md text-gray-500">
                🛡️{selectedCard.def}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  )
}
