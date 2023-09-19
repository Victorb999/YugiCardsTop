
import {
  useQuery
} from "react-query";
import { useAtom } from 'jotai'
import { cardSetAtom } from '../../store/store'
import { requestCards } from "../../services/cards";
import { Card } from "./types";

export const Cards = () => {
  const [cardSet] = useAtom(cardSetAtom);
  const { isError, isLoading, data } = useQuery(
    ['setcards',cardSet],
    () => requestCards(cardSet),
    {
      enabled: !!cardSet && cardSet !== '', // Habilita a consulta apenas se cardSet não for nulo ou indefinido
      refetchOnWindowFocus: false, // Impede que a consulta seja disparada quando a janela está em foco
      // Outras opções de consulta
    }
  );

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Error</h1>

  return (
          <div className="flex flex-col p-4 w-4/6"> 
            <h1>{cardSet}</h1>
            {data && data.map((card : Card) => {
              return (
                <p key={card.id}>{card.name}</p>
              )
            })}
          </div>
   )
}