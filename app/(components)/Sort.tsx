'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../(redux)/store";
import { ArrowDownAZ } from "lucide-react";
import { useEffect, useState } from "react";
import { setSort } from "@/app/(redux)/(reducers)/firstSlice";

interface SortOptionProps {
  children: string;
  isOpen: boolean;
};
const SortOption = ({ children, isOpen }: SortOptionProps) => {
  const { sort } = useSelector((state: RootState) => state.first);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSort(children));
    typeof localStorage !== undefined && localStorage.setItem('sushiSort', children);
  }

  // useEffect(() => {
  //   dispatch(setSort(localStorage.getItem('sushiSort') || 'Default'));
  // }, [sort]);

  return (
    <li className={`w-full rounded spec-delay
      ${sort === children ? 'font-medium text-sky-200 bg-white/10' : 'text-white'} font-inherit
      ${isOpen ? 'translate-x-0' : 'translate-x-full'} duration-200
    `}>
      <button className="
        pt-0.5 pb-1
        text-base tracking-wide w-full text-center
        hover:bg-white/20 duration-300
      "
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  )
}
const Sort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { sort } = useSelector((state: RootState) => state.first);

  const variants = ['Default', 'A - Z', 'Z - A', 'by Popularity', 'by Diffuculty'];

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div
      onClick={handleClick}
      className="relative w-44 ml-1.5"
    >
      <button
        onClick={handleClick}
        className={`
          w-full px-4 py-2 flex items-center justify-between gap-2 rounded
          ${isOpen ? 'bg-white/10' : 'bg-white/20 hover:bg-white/30'} duration-300
          `}
      >
        <span className="font-inherit font-medium text-base md:text-lg text-white whitespace-nowrap">
          {sort}
        </span>
        <ArrowDownAZ className="text-white hidden xs:inline" />
      </button>
      {/* menu */}
      <ul className={`absolute w-full top-12 left-1/2 -translate-x-1/2
        flex flex-col gap-1
        px-1 py-1.5 bg-cyan-800/80 rounded-md z-10 overflow-x-hidden
        ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 delay-200'} duration-200 origin-top ease-linear
      `}>
        {variants.map((item, idx) => (
          <SortOption key={idx} isOpen={isOpen}>
            {item}
          </SortOption>
        ))}
      </ul>
    </div>
  );
}

export default Sort;