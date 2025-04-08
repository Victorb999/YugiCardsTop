import { useQuery } from "react-query"
import { useAtom } from "jotai"
import {
  cardSetAtom,
  cardFilterAtom,
  SelectedCardAtom,
} from "../../store/store"
import { requestCards } from "../../services/cards"
import { CardType } from "./types"
import { Card } from "../../components/Card/Card"

export const Cards = () => {
  const [cardSet] = useAtom(cardSetAtom)
  const [cardFilter] = useAtom(cardFilterAtom)
  const filter = {
    cardset: cardSet,
    fname: cardFilter.fname,
    level: cardFilter.level,
  }
  const [, setSelectedCard] = useAtom(SelectedCardAtom)

  const { isError, isLoading, data } = useQuery(
    ["setcards", cardSet, cardFilter],
    () => requestCards(filter),
    {
      enabled: cardSet !== "" || cardFilter.fname !== "", // Habilita a consulta apenas se cardSet não for nulo ou indefinido
      refetchOnWindowFocus: false, // Impede que a consulta seja disparada quando a janela está em foco
      onSuccess: () => {
        setSelectedCard({} as CardType) // Limpa o card selecionado quando a consulta é bem-sucedida
      },
      // Outras opções de consulta
    }
  )

  if (isLoading)
    return (
      <div className="flex flex-col p-4 custom-width align-center">
        <h1>Loading ...</h1>
      </div>
    )

  if (isError)
    return (
      <div className="flex flex-col p-4 custom-width items-center">
        <h1>Card not found =[</h1>
      </div>
    )

  return (
    <div
      className="flex flex-col 
      items-center
      justify-center p-4  sm:h-[80dvh] h-[50dvh] w-full"
    >
      <h1 className="font-bold sm:text-3xl text-xl pb-4 text-white">
        {cardSet}
      </h1>
      <div
        className="flex flex-row flex-wrap overflow-y-auto p-2 items-center
      justify-center"
      >
        {data ? (
          data.map((card: CardType) => {
            return <Card key={card.id} card={card} />
          })
        ) : (
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="font-bold sm:text-3xl text-xl pb-4 text-white">
              Search for Yu-gi-oh cards ...
            </h1>
            <img
              height={window.innerWidth > 640 ? "400px" : "200px"}
              width={window.innerWidth > 640 ? "200px" : "100px"}
              src="https://gglounge.pt/wp-content/uploads/2022/12/Yu-Gi-Oh-Card-Back-Sleeves-Japanese-Size.jpeg"
              alt="Card"
            />
          </div>
        )}
      </div>
    </div>
  )
}
