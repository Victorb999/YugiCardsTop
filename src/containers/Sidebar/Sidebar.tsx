import { useQuery } from "react-query"
import { requestSetCards } from "../../services/cards"
import { SelectCardSet } from "../../components/SelectCardSet/SelectCardSet"
import { InputCardName } from "../../components/InputCardName/InputCardName"
import { InputLevel } from "../../components/InputLevel/InputLevel"

export interface SetCard {
  set_name: string
  set_code: string
  num_of_cards: number
  tcg_date?: string
  set_image?: string
}

export const Sidebar = () => {
  const { isError, isLoading, data } = useQuery("setsetcards", requestSetCards)
  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Erro</h1>

  if (data) {
    return (
      <div
        className="
        flex flex-col pb-8 p-4 custom-background-2 
        sm:w-[20dvw] sm:h-[90dvh] h-fit
      "
      >
        <h1 className="font-bold sm:text-3xl text-xl pb-4 text-[#c99944]">
          Cards sets
        </h1>
        <div className="pb-4 border-b border-[#c99944]">
          <SelectCardSet cardSets={data} />
        </div>
        <div className="pb-4 border-b border-[#c99944]">
          <InputCardName />
        </div>
        <div className="pb-4 border-b border-[#c99944]">
          <InputLevel />
        </div>
      </div>
    )
  }
  return <></>
}
