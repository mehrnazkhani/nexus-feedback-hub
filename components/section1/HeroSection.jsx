import React from "react";

import HeroSectionCard from "./HeroSectionCard";

export default function HeroSection() {
    return (
        <div>
            <div className="bg-2EB67D mx-8 my-24 grid justify-items-center">
                <div className="font-Inter grid justify-center text-center gap-8">
                    <h1 className="px-8 text-[28px] font-extrabold leading-normal max-w-xl">
                        Collect all your product feedback{" "}
                        <span className="text-blue-700">in one location</span>
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Nexus is the most delightful way to capture feedback,
                        extract insights, create roadmaps, and communicate your
                        releases.
                    </p>
                </div>

                <div className="mt-10 flex gap-2 *:cursor-pointer *:px-6 *:py-3 font-Inter text-sm">
                    <button className="bg-blue-700 text-white rounded-lg">
                        Get started
                    </button>
                    <button className="border-2 border-blue-700 text-blue-700 rounded-lg">
                        Book a demo
                    </button>
                </div>

                <div className="mt-40 w-full max-w-md  bg-blue-100 rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-3 transform rotate-3">
                        <img
                            src="/avatar1.png"
                            alt="User"
                            className="w-8 h-8 rounded-full"
                        />
                        <div className="w-1/3 h-3 bg-gray-200 rounded-md">
                        </div>
                        <img
                            src="/airbnb.svg"
                            alt="Airbnb"
                            className="w-6 h-6"
                        />
                        <div className="w-1/3 h-3 bg-gray-200 rounded-md">
                        </div>
                        <img
                            src="/slack.svg"
                            alt="Slack"
                            className="w-6 h-6"
                        />
                    </div>

                    <div className="space-y-3">
                        <HeroSectionCard
                            avatar="/avatar2.png"
                            icon1="/dropbox.svg"
                            icon2="/zapier.svg"
                        />
                        <HeroSectionCard
                            avatar="/avatar3.png"
                            icon1="/openai.svg"
                            icon2="/circle.svg"
                        />
                        <HeroSectionCard
                            avatar="/avatar4.png"
                            icon1="/spotify.svg"
                            icon2="/intercom.svg"
                        />
                        <HeroSectionCard
                            avatar="64a5cae984029ebf1ce2d36d_memoji-3.jpg.svg"
                            icon1="64a6b440f4b3868b2b01ab08_logo-vercel.svg.svg"
                            icon2="64a5d2c0f1c54d34eabd3620_logo-hubspot.svg.svg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
