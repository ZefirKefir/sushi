'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../(redux)/store";
import { X } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { setTab } from "../(redux)/(reducers)/FirstSlice";

interface SearchInputProps {
  setSearch: Function;
};
const SearchInput = ({ setSearch }: SearchInputProps) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target?.value);
  };

  const resetSearch = () => {
    const input = document.querySelector('.input');
    input.value = '';
    setSearch('');
  };

  const handleEscClick = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      resetSearch();
    }
  }

  return (
    <div className="relative px-1 flex items-center gap-2 bg-white rounded isolate">
      <input
        type="text"
        onChange={e => handleChange(e)}
        onKeyDown={e => handleEscClick(e)}
        placeholder="Search for rolls..."
        className="input peer py-2 px-1 h-full font-medium text-cyan-900 placeholder:font-normal placeholder:text-cyan-800/50 placeholder:text-sm outline-none"
      />
      {/* outline */}
      <span className="rounded
        absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 duration-100
        border-2 border-white w-[calc(100%+6px)] h-[calc(100%+6px)] 
        opacity-0 peer-focus:opacity-100 -z-10
      " />

      <X
        onClick={resetSearch}
        className="pr-2 w-full text-cyan-950 cursor-pointer"
      />
    </div>
  );
}

export default SearchInput;