import { Sidebar } from "../containers/Sidebar/Sidebar";
import { Cards } from "../containers/Cards/Cards";

export const Main = () => {
 return (
  <div className="flex">
    <Sidebar />
    <Cards />
  </div>
 )
}