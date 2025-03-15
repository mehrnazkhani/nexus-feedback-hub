import React from "react";

export default function HeroSectionCard({ avatar, icon1, icon2 }) {
    return (
        <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-3">
            <img src={avatar} alt="User" className="w-8 h-8 rounded-full" />
            <div className="mx-3 w-1/3 h-2.5 bg-gray-200 rounded-md"></div>
            <img src={icon1} alt="Icon 1" className="w-6 h-6" />
            <div className="mx-3 w-1/3 h-2.5 bg-gray-200 rounded-md"></div>
            <img src={icon2} alt="Icon 2" className="w-6 h-6" />
        </div>
    );
}
