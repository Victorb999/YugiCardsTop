import { useAtom } from "jotai";
import { cardFilterAtom } from "../../store/store";

export const InputLevel = () => {
  const [cardFilter, setCardFilter] = useAtom(cardFilterAtom);

  const changeLevel = (level: string) => {
    if (level !== "" || parseInt(level) > 0) {
      setCardFilter({ ...cardFilter, level: level });
    } else {
      setCardFilter({ ...cardFilter, level: "" });
    }
  };
  return (
    <>
      <h1 className="font-bold text-3xl pb-4 ml-4 mt-2 text-white">Level</h1>
      <input
        type="number"
        className="p-2 rounded text-black hover:text-gray-700 
          bg-gradient-to-r from-rose-500 via-red-500 to-amber-500"
        min="0"
        onChange={(e) => changeLevel(e.target.value)}
      />
    </>
  );
};
