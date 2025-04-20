import { useAtom } from "jotai"
import { cardSetAtom } from "../../store/store"

export interface SetCard {
  set_name: string
  set_code: string
  num_of_cards: number
  tcg_date?: string
  set_image?: string
}

interface CardSetProps {
  cardSets: SetCard[]
}

export const SelectCardSet = ({ cardSets }: CardSetProps) => {
  const [, setCardSet] = useAtom(cardSetAtom)
  return (
    <select
      className="p-2 rounded text-gray-300 hover:text-gray-700 
      custom-background-2
      border-b border-gray-700 focus:outline-none focus:border-gray-700
      w-full
         "
      onChange={(e) => setCardSet(e.target.value)}
      defaultValue=""
    >
      <option className="p-1" value="">
        -- Select a card set --
      </option>
      {cardSets.map((cardSet: SetCard, index: number) => {
        return (
          <option
            className="p-1"
            value={cardSet.set_name}
            key={cardSet.set_code + index}
          >
            ⚫ {cardSet.set_name}
          </option>
        )
      })}
    </select>
  )
}
