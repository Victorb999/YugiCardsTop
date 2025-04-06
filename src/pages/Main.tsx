import { Sidebar } from "../containers/Sidebar/Sidebar"
import { Cards } from "../containers/Cards/Cards"
import { CardInfo } from "../containers/CardInfo/CardInfo"

export const Main = () => {
  return (
    <div className="flex flex-col custom-background h-[100vh] w-full overflow-hidden">
      <h1 className="font-bold text-4xl m-4 text-rose-500">
        YugiTop
        <span className="text-amber-500">.</span>
      </h1>
      <div className="flex sm:flex-row flex-col w-full">
        <Sidebar />
        <Cards />
        <CardInfo />
      </div>
    </div>
  )
}
