import { useAtom } from "jotai"
import { cardFilterAtom } from "../../store/store"

export const InputLevel = () => {
  const [cardFilter, setCardFilter] = useAtom(cardFilterAtom)

  const changeLevel = (level: string) => {
    if (level !== "" || parseInt(level) > 0) {
      setCardFilter({ ...cardFilter, level: level })
    } else {
      setCardFilter({ ...cardFilter, level: "" })
    }
  }
  return (
    <>
      <h1 className="font-bold sm:text-lg text-md mt-2  text-[#c99944]">
        Level
      </h1>
      <input
        type="number"
        className="p-2 rounded text-gray-200 hover:text-gray-700 
      custom-background-2
      border-b border-gray-700 focus:outline-none focus:border-gray-700
      w-full"
        min="0"
        onChange={(e) => changeLevel(e.target.value)}
      />
    </>
  )
}
