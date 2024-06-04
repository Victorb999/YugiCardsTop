import { useQuery } from "react-query";
import { requestSetCards } from "../../services/cards";
import { SelectCardSet } from "../../components/SelectCardSet/SelectCardSet";
import { InputCardName } from "../../components/InputCardName/InputCardName";
import { InputLevel } from "../../components/InputLevel/InputLevel";

export interface SetCard {
  set_name: string;
  set_code: string;
  num_of_cards: number;
  tcg_date?: string;
  set_image?: string;
}

export const Sidebar = () => {
  const { isError, isLoading, data } = useQuery("setsetcards", requestSetCards);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Erro</h1>;

  if (data) {
    return (
      <div className="flex flex-col pb-8 p-4 bg-[#060606] sm:w-64 custom-width sm:h-[80dvh] h-fit rounded m-4">
        <h1 className="font-bold text-3xl pb-4 ml-4 text-white">Cards sets</h1>
        <SelectCardSet cardSets={data} />
        <InputCardName />
        <InputLevel />
      </div>
    );
  }
  return <></>;
};
