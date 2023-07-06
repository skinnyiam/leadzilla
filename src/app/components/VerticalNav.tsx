"use client";
import React, { useState, useEffect } from "react";
import ProfileComponent from "./profile";
import Campaign from "./Campaign";
import Image from "next/image";
import Link from "next/link";
type User = {
  displayName: string;
  photoURL: string;
};
const VerticalNavbar = () => {
  const [activeComponent, setActiveComponent] = useState("profile");
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const data = window.localStorage.getItem("userData");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);
  console.log(user);
  const handleComponentChange = (componentName: any) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="flex justify-around">
      <nav className="z-20 mt-5 flex h-screen mx-4 flex-col items-center justify-start gap-8 rounded-xl bg-neutral-900 pb-12 pt-8  text-neutral-400 md:w-60 ">
        {user ? (
          <div className="flex w-full justify-center p-0 md:p-4">
            <Link
              href="/"
              className="flex w-full justify-center rounded-xl p-0 duration-300 md:bg-neutral-800  md:p-2 md:hover:bg-neutral-700"
            >
              <div className="h-16 w-16 p-2 md:hidden">
                <div
                  className={`relative h-full w-full overflow-hidden rounded-full`}
                >
                  {/* <Image src={user?.image ?? ""} alt={user?.name ?? ""} fill /> */}
                </div>
              </div>
              <div className="hidden w-full gap-3 md:flex ">
                <div
                  className={`relative aspect-square h-[2.5rem] overflow-hidden rounded-full`}
                >
                  <Image
                    src={user?.photoURL || ""}
                    alt={user?.displayName || ""}
                    fill
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <p className="text-sm font-medium text-neutral-200">
                    {user.displayName}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <>
            <div className="h-16 w-16 p-4 md:hidden">
              <div className={`h-full w-full rounded-full bg-neutral-800`} />
            </div>
            <div className="hidden w-full flex-col items-center gap-3 rounded-full px-4 duration-300 hover:border-neutral-600 md:flex">
              <div
                className={`relative aspect-square w-24 overflow-hidden rounded-full  bg-neutral-800`}
              />
              <div className="flex flex-col items-center gap-1">
                <div className="my-1 h-4 w-32 rounded-lg bg-neutral-800" />
                <div className="my-1 h-4 w-40 rounded-lg  bg-neutral-800" />
              </div>
            </div>
          </>
        )}
        <div className="pt-6">
          <ul className="space-y-4">
            <li>
              <button
                className={`flex w-full cursor-pointer items-center gap-3 text-white rounded-md px-3 py-2 text-xl transition  hover:bg-neutral-800  ${
                  activeComponent === "profile" ? "bg-neutral-700/50" : ""
                }`}
                onClick={() => handleComponentChange("profile")}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                className={`flex w-full cursor-pointer items-center gap-3 text-white rounded-md px-3 py-2 text-xl transition  hover:bg-neutral-800 ${
                  activeComponent === "Campaign" ? "bg-neutral-700/50" : ""
                }`}
                onClick={() => handleComponentChange("Campaign")}
              >
                Campaign
              </button>
            </li>
          </ul>
        </div>
        <div className="pb-6">
          {/* Add any additional content or links at the bottom of the navbar */}
        </div>
      </nav>
      <div className="flex-1 p-4">
        {activeComponent === "profile" && <ProfileComponent />}
        {activeComponent === "Campaign" && <Campaign />}
      </div>
    </div>
  );
};

export default VerticalNavbar;
