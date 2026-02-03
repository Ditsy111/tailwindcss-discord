
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

export default function SideBar(){
    return(
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">

        <SideBarIcon Icon={FaFire} size={28} text="Fire" />
        <SideBarIcon Icon={BsPlus} size={32} text="Plus"/>
        <SideBarIcon Icon={BsFillLightningFill} size={20} text="Lighting" />
        <SideBarIcon Icon={FaPoo} size={20} text="Poop" />
        <SideBarIcon Icon={BsGearFill} size={22} text="Settings"/>
            
        </div>
    )

    function SideBarIcon({Icon, size=24, text}){
        return(
            <div className="sidebar-icon group">
                <Icon size={size} />
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
            </div>
        )
    }


}