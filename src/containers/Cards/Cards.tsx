import { useQuery } from "react-query";
import { useAtom } from "jotai";
import { cardSetAtom, cardFnameAtom } from "../../store/store";
import { requestCards } from "../../services/cards";
import { CardType } from "./types";
import { Card } from "../../components/Card/Card";

export const Cards = () => {
  const [cardSet] = useAtom(cardSetAtom);
  const [cardFname] = useAtom(cardFnameAtom);
  const filter = {
    cardset: cardSet,
    fname: cardFname,
  };

  const { isError, isLoading, data } = useQuery(
    ["setcards", cardSet, cardFname],
    () => requestCards(filter),
    {
      enabled: cardSet !== "" || cardFname !== "", // Habilita a consulta apenas se cardSet não for nulo ou indefinido
      refetchOnWindowFocus: false, // Impede que a consulta seja disparada quando a janela está em foco
      // Outras opções de consulta
    },
  );

  if (isLoading)
    return (
      <div className="flex flex-col p-4 custom-width align-center">
        <h1>Loading ...</h1>
      </div>
    );

  if (isError)
    return (
      <div className="flex flex-col p-4 custom-width align-center">
        <h1>Card not found =[</h1>
      </div>
    );

  return (
    <div className="flex flex-col p-4 custom-width h-[80dvh] bg-[#060606] rounded m-4">
      <h1 className="font-bold text-3xl pb-4 text-white">{cardSet}</h1>
      <div className="flex flex-row flex-wrap overflow-y-auto p-2">
        {data ? (
          data.map((card: CardType) => {
            return <Card key={card.id} card={card} />;
          })
        ) : (
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="font-bold text-3xl pb-4 text-white">
              Search for Yu-gi-oh cards ...
            </h1>
            <img
              width={"400px"}
              src="https://gglounge.pt/wp-content/uploads/2022/12/Yu-Gi-Oh-Card-Back-Sleeves-Japanese-Size.jpeg"
              alt="Card"
            />
          </div>
        )}
      </div>
    </div>
  );
};
