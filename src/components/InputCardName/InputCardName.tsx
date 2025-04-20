import { useAtom } from "jotai"
import { cardFilterAtom } from "../../store/store"

export const InputCardName = () => {
  const [cardFilter, setCardFilter] = useAtom(cardFilterAtom)

  const changeFname = (fname: string) => {
    if (fname.length > 3) {
      setCardFilter({ ...cardFilter, fname: fname })
    } else {
      setCardFilter({ ...cardFilter, fname: "" })
    }
  }
  return (
    <>
      <h1 className="font-bold sm:text-lg text-md mt-2  text-[#c99944]">
        Name
      </h1>
      <input
        type="text"
        className="p-2 rounded text-gray-200 hover:text-gray-700 
      custom-background-2
      border-b border-gray-700 focus:outline-none focus:border-gray-700
      w-full"
        onChange={(e) => changeFname(e.target.value)}
      />
    </>
  )
}
