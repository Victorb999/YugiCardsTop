import {
  useQuery,
} from "react-query";
import {requestSetCards} from '../../services/cards'
import { useAtom } from 'jotai';
import { cardSetAtom } from '../../store/store'

export interface SetCard {
  set_name: string
  set_code: string
  num_of_cards: number
  tcg_date?: string
  set_image?: string
}


export const Sidebar = () => {
    const [cardSet,setCardSet] = useAtom(cardSetAtom);
    const { isError, isLoading, data } = useQuery("setsetcards",requestSetCards);
    if(isLoading) return <h1>Loading...</h1>
    if(isError) return <h1>Erro</h1>
    
    if(data){
      return(
          <div className="flex flex-col p-2 bg-blue-500 w-2/6">
            <h1 className="text-bold text-xl">Cards sets</h1>
            {
            data.map((cardSet: SetCard, index: number) => {
              return(
                <span className="pt-2"
                    onClick={ () => setCardSet(cardSet.set_name)}
                    key={cardSet.set_code + index}>
                    {cardSet.set_name}
                </span>
              )
            })
            }         
          </div>
      )
    }
    return <></>
}