"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpTrayIcon,
  MinusIcon,
  PlusIcon,
  CloudIcon,
} from "@heroicons/react/20/solid";
type Props = {};

const Profile = (props: Props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const data = window.localStorage.getItem("userData");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);
  return (
    <div className="mx-5 my-10 ">
      <form className="my-5 flex flex-col items-center rounded-xl p-5">
        <div className="relative mb-5">
          <div
            className={`relative mb-5 aspect-square w-28 overflow-hidden rounded-full border border-neutral-900 outline outline-neutral-800 transition-all`}
          ></div>
          <div className="absolute bottom-4 right-2 z-50 cursor-pointer rounded-full bg-neutral-800 text-base transition-all duration-300 hover:bg-neutral-700">
            <div className="relative cursor-pointer p-2">
              <ArrowUpTrayIcon className="w-5" />
              <input
                type="file"
                accept="image/*"
                className="z-2 absolute top-0 h-full w-full cursor-pointer opacity-0"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-5 md:flex-row">
            <div>
              <label className="mb-2 block font-medium text-neutral-400">
                Name
              </label>
              <div className="relative mb-6">
                <input
                  className="block text-white min-w-[20rem] rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 placeholder-neutral-400 outline-none ring-transparent transition duration-300 hover:border-neutral-500 focus:border-neutral-400 focus:ring-neutral-500 active:outline-none active:ring-transparent"
                  placeholder="Your Name, not your dog"
                />
              </div>
            </div>
          </div>
          <div className="mb-4 flex w-full flex-col items-start">
            <label className="mb-2 block font-medium text-neutral-400">
              Phone Number
            </label>
            <div className="mb-4 flex w-full flex-col justify-start gap-4">
              <input
                className="block text-white min-w-[20rem] rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 placeholder-neutral-400 outline-none ring-transparent transition duration-300 hover:border-neutral-500 focus:border-neutral-400 focus:ring-neutral-500 active:outline-none active:ring-transparent"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          <div className="my-4">
            <label className="mb-2 block font-medium text-neutral-400">
              Bio
            </label>
            <div className="relative mb-6">
              <textarea
                placeholder="I am this, and this and this"
                className="block text-white min-w-[14rem] rounded-r-xl border border-neutral-700 bg-neutral-800 px-3 py-2 placeholder-neutral-400 outline-none ring-transparent transition duration-300 hover:border-neutral-500 focus:border-neutral-400 focus:ring-neutral-500 active:outline-none active:ring-transparent"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full px-6">
          <button
            type="submit"
            className={`group my-5 inline-flex items-center gap-1 rounded-xl bg-[#5B3A3A] px-6 py-2 text-center font-medium text-white transition-all duration-300 hover:bg-[#813636] `}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
