'use client'

import dynamic from "next/dynamic";
import Sort from "./Sort";


const DynamicSearchInput = dynamic(() => import('./SearchInput'), {
  ssr: false,
});

interface TopProps {
  setSearch: Function;
};
const Top = ({ setSearch }: TopProps) => {
  return (
    <nav className="h-28 py-2 px-3 bg-cyan-900 flex items-center justify-between">
      <DynamicSearchInput setSearch={setSearch} />
      <span className="opacity-0 w-0 h-0" />
      <Sort />
    </nav>
  );
}

export default Top;