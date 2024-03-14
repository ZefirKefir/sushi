'use client';

import Top from "./(components)/Top";
import Main from "./(components)/Main";
import Footer from "./(components)/Footer";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <div className="App
      flex flex-col h-[100dvh]
    ">
      <Top setSearch={setSearch} />
      <Main search={search} />
      <Footer />
    </div>
  );
}
