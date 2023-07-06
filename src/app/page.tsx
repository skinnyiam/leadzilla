"use client";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { initFirebase } from "./config/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const handleGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        router.push(`/dashboard`);
        window.localStorage.setItem("userData", JSON.stringify(user));
      } else {
        router.push("/");
      }
    });
  };
  return (
    <div className=" h-screen justify-center items-center flex">
      <div className="border border-neutral-700 p-4 rounded-md flex justify-center items-center flex-col gap-6">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-2xl font-semibold text-white">
            Welcome to Salesrobot!!!
          </h1>
          <p className="text-xl font-thin text-white">
            Your only one place to manage your campaign.
          </p>
        </div>
        <button
          onClick={handleGoogle}
          className="flex justify-center items-center hover:bg-neutral-900 transition ease-in-out duration-300 p-3 rounded-lg  font-medium text-white bg-neutral-800 "
        >
          <FcGoogle className="text-2xl mr-2" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Home;
