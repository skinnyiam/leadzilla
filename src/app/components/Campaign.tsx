"use client";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
type Props = {};

const Campaign = (props: Props) => {
  const CreateCampaign = () => {
    return (
      <form className="mx-auto absolute top-16 my-12 flex w-full max-w-2xl flex-col gap-8">
        <div className="relative">
          <button className="absolute  right-0   " onClick={togglePopOver}>
            <AiFillCloseCircle className="text-white w-5 h-5" />
          </button>
        </div>

        <div className="relative flex aspect-[18/9] w-full items-end justify-start overflow-hidden rounded-xl bg-neutral-700">
          <div className="relative m-2 flex w-auto cursor-pointer items-center gap-2 rounded-xl border border-neutral-500 bg-neutral-800/80 p-3 text-sm font-medium duration-300 hover:border-neutral-400">
            <input
              type="file"
              accept="image/*"
              className="z-2 absolute h-full w-full cursor-pointer opacity-0"
            />
            Upload Cover
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="title" className="text-lg  text-neutral-200">
            Title
          </label>
          <input
            placeholder="Campaign Title"
            className="w-full rounded-lg bg-neutral-800 px-3 py-2 font-medium  text-neutral-200 outline outline-1 outline-neutral-700 transition-all duration-300 hover:outline-neutral-600 focus:outline-neutral-500 sm:text-2xl"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="description" className="text-lg  text-neutral-200">
            Description
          </label>
          <textarea
            placeholder="Campaign Description"
            className="w-full rounded-lg bg-neutral-800 px-3 py-2 font-medium  text-neutral-200 outline outline-1 outline-neutral-700 transition-all duration-300 hover:outline-neutral-600 focus:outline-neutral-500 sm:text-2xl"
          />
        </div>

        <button
          className={`group inline-flex items-center justify-center gap-[0.15rem] rounded-xl bg-[#5B3A3A] px-[1.5rem] py-2  text-center text-lg font-medium text-neutral-200 transition-all duration-300 hover:bg-[#813636] disabled:bg-neutral-700 disabled:text-neutral-300`}
        >
          Create Campaign
        </button>
      </form>
    );
  };
  const [isOpen, setIsOpen] = useState(false);

  const togglePopOver = () => {
    setIsOpen(!isOpen);
  };
  const data = false;
  return (
    <div className="flex flex-col justify-center items-center pt-12 min-h-screen">
      {!isOpen ? (
        <div>
          <h1 className="text-white font-medium text-2xl">
            Create a personalized campaign with us !!!
          </h1>
        </div>
      ) : null}

      {!isOpen ? (
        <div className="pt-10">
          {data ? (
            <div>h</div>
          ) : (
            <div>
              <>
                <div className=" w-full flex-col items-center gap-3 px-4 duration-300 border-neutral-600 border rounded-md p-4 flex">
                  <div className="my-1 h-48 w-96 rounded-lg bg-neutral-800" />
                  <div className="flex  items-center gap-4">
                    <div className="my-1 h-4 w-32 rounded-lg bg-neutral-800" />
                  </div>
                  <div className="my-1 h-4 w-full rounded-lg bg-neutral-800" />
                  <div className="my-1 h-4 w-full rounded-lg bg-neutral-800" />

                  <div className="my-1 h-4 w-full rounded-lg bg-neutral-800" />
                </div>
                <div className="pt-8 flex flex-col justify-center items-center">
                  <h1 className="text-white font-medium">
                    Looks like you have no campaign goin on
                  </h1>
                  <button
                    onClick={togglePopOver}
                    className="text-white font-thin underline cursor-pointer"
                  >
                    Create Campaign
                  </button>
                </div>
              </>
            </div>
          )}
        </div>
      ) : null}

      {isOpen && <CreateCampaign />}
    </div>
  );
};

export default Campaign;
