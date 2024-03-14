'use client';

import { X } from "lucide-react";
import { ChangeEvent } from "react";

interface SearchInputProps {
  setSearch: Function;
};
const SearchInput = ({ setSearch }: SearchInputProps) => {

  const handleChange = (e: ChangeEvent) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  const resetSearch = () => {
    if (typeof window !== 'undefined') {
      const input = document.querySelector('.input');
      (input as HTMLInputElement).value = '';
    }
    setSearch('');
  };

  const handleEscClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
        className="input peer py-2.5 px-1 max-w-40 md:max-w-60 h-full font-medium tracking-wider text-cyan-900 placeholder:font-normal placeholder:text-cyan-800/70 placeholder:text-sm placeholder:tracking-wide outline-none"
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