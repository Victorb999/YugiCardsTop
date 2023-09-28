import { useAtom } from "jotai";
import { cardSetAtom } from "../../store/store";

export interface SetCard {
  set_name: string;
  set_code: string;
  num_of_cards: number;
  tcg_date?: string;
  set_image?: string;
}

interface CardSetProps {
  cardSets: SetCard[];
}

export const SelectCardSet = ({ cardSets }: CardSetProps) => {
  const [, setCardSet] = useAtom(cardSetAtom);
  return (
    <select
      className="p-2 rounded text-black hover:text-gray-700 
          bg-gradient-to-r from-rose-500 via-red-500 to-amber-500"
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
        );
      })}
    </select>
  );
};
