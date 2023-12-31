import React from "react";
import {useState} from "react";
import RightSection from "./RightSection";
import LeftSideBar from "./LeftSideBar";


function Dashboard() {
    const [showLeftBar, setShowLeftBar] = useState(false);

    return (
        <div className="xl:w-screen w-screen xl:h-[1024px] h-auto flex bg-bg1">
            <div>
                <LeftSideBar />
            </div>
            <div className={`${showLeftBar ? '' : 'z-0'} bg-bg1 w-screen`}>
                <RightSection />
            </div>
            <div className="absolute top-[70px] right-16 lg:hidden" onClick={()=>setShowLeftBar(!showLeftBar)}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8" 
                >
                    <path 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Dashboard;