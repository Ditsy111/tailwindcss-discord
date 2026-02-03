import ChannelBar from "./components/ChannelBar";
import ContentContainer from "./components/ContentContainer";
import SideBar from "./components/SideBar";
import TopNavigation from "./components/TopNavigation";
import "./index.css"


export default function App(){
  return(
    <div className="flex h-screen w-screen">
    <SideBar/>
    <ChannelBar/>
    <ContentContainer/>
    </div>
  )
}