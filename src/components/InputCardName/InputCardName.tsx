import { useAtom } from "jotai";
import { cardFilterAtom } from "../../store/store";

export const InputCardName = () => {
  const [cardFilter, setCardFilter] = useAtom(cardFilterAtom);

  const changeFname = (fname: string) => {
    if (fname.length > 3) {
      setCardFilter({ ...cardFilter, fname: fname });
    } else {
      setCardFilter({ ...cardFilter, fname: "" });
    }
  };
  return (
    <>
      <h1 className="font-bold text-3xl pb-4 ml-4 mt-2 text-white">Name</h1>
      <input
        type="text"
        className="p-2 rounded text-black hover:text-gray-700 
          bg-gradient-to-r from-rose-500 via-red-500 to-amber-500"
        onChange={(e) => changeFname(e.target.value)}
      />
    </>
  );
};
