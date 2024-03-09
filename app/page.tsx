'use client';

import Top from "./(components)/Top";
import Main from "./(components)/Main";
import Footer from "./(components)/Footer";
import { useSelector } from "react-redux";

import data from "@/public/constants/data";
import { RootState } from "./(redux)/store";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState('');
  const { tab } = useSelector((state: RootState) => state.first)

  return (
    <div className="App
      flex flex-col h-[100dvh] p-1.5 bg-black
    ">
      {/* <p className="text-4xl font-bold text-blue-900 fixed top-24 right-20 z-20">
        {tab}
      </p> */}
      <Top setSearch={setSearch} />
      <Main search={search} />
      <Footer />
    </div>
  );
}
