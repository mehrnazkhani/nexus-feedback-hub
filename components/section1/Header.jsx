import React from "react";

import HeroSection from "./HeroSection";

export default function Header() {
    return (
        <>
            <div className="mx-auto px-3 py-2 flex justify-between items-center lg:px-16 lg:pt-3 lg:*:flex lg:*:items-center">
                <div className="px-4 py-2.5 flex items-center gap-2.5 lg:gap-1.5 lg:items-center lg:w-[200px]">
                    <img
                        src="Group.svg"
                        alt="logo of Nexus"
                        className="w-[30.64px] h-[28.92px]"
                    />
                    <span className="font-Russo-One text-lg lg:text-base">
                        Nexus
                    </span>
                </div>

                <ul className="hidden lg:flex gap-7 lg:**:text-171618">
                    <li>
                        <a href="#" className="flex items-center gap-1.5">
                            Product
                            <img
                                src="div.nav-dropdown-icon.svg"
                                alt="dropdown"
                                className="w-[10.33px] h-[5.8px]"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">Changelog</a>
                    </li>
                    <li>
                        <a href="#">Manifesto</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-1.5">
                            Resources
                            <img
                                src="div.nav-dropdown-icon.svg"
                                alt="dropdown"
                                className="w-[10.33px] h-[5.8px]"
                            />
                        </a>
                    </li>
                </ul>

                <div className="*:cursor-pointer hidden lg:flex">
                    <button className="w-[73.8.1px] h-[38.59px] text-171618 px-3.5 gap-2.5">
                        Log in
                    </button>
                    <button className="w-[133.3px] h-[38.59px] px-6 py-3 bg-blue-700 text-white rounded-lg leading-none">
                        Get started
                    </button>
                </div>

                <div className="px-3 py-2 lg:hidden">
                    <img
                        src="Clip path group.svg"
                        alt="SVG-menu"
                        className="lg:hidden"
                    />
                </div>
            </div>

            <HeroSection />
        </>
    );
}
