
import { Avatar, Indicator } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header =()=>{
    const location = useLocation();
    
    // Hide header on signup and login pages
    const hideOnPages = ['/signup', '/login'];
    if (hideOnPages.includes(location.pathname.toLowerCase())) {
        return null;
    }
    
    return (
        <div className="w-full bg-mine-shaft-950 px-6 text-white  h-20 flex  justify-between items-center font-['poppins']">
            <div className="flex gap-1 items-center  text-bright-sun-400">
                <IconAnchor className="h-8 w-8 stoke={2.5}"/>
                <div className="text-2xl font-bold font-semibold">LocalHireX</div>
            </div>
            {NavLinks()}
            <div className="flex gap-3 items-center">
            <ProfileMenu/>    
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <IconSettings stroke={1.5}/>
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <Indicator color="bright-sun.4" offset={6} size={8} processing>
                        <IconBell stroke={1.5}/>
                    </Indicator>
                        
                </div>
            </div>
        </div> 
    );
}
export default Header;