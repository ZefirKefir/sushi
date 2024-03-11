'use client';

import Ingredient from "./Ingredient";
import data from "@/public/constants/data";
import { useRef } from "react";

interface DetailsProps {
  id: number;
  isOpen: boolean;
  className?: string;
};

const Details = ({ id, isOpen, className = '' }: DetailsProps) => {
  const roll = data.rolls.find(roll => roll.id === id) || data.rolls[0];

  const ref = useRef();
  // ToDo: spin animate;
  // ToDo: continue;
  let height = 24;
  if (typeof window !== undefined) {
    height = document.getElementById(id.toString())?.offsetHeight || 0;
  }
  return (
    <div className={
      `${className} flex flex-col ${isOpen ? 'justify-end' : 'justify-center'}
      ${isOpen ? 'gap-1 pt-10' : 'gap-0 pt-0'} duration-200
    `}>
      <div id={id.toString()} className={`${isOpen ? 'scale-y-100 opacity-100 delay-100' : 'scale-y-0 delay-100 opacity-0 max-h-0'}
        ${roll.inside && roll.inside?.length !== 0 ? 'block' : 'hidden'}
        ${height && height >= 25 ? 'pt-1' : 'pt-0'}
        max-h-20 origin-bottom duration-200 flex gap-2
      `}>
        <span className="italic">
          Inside:
        </span>
        <div className="flex gap-1 flex-wrap">
          {roll.inside?.map(ing => (
            <Ingredient key={ing} id={ing} />
          ))}
        </div>
      </div>
      <div className={`${isOpen ? 'scale-y-100 opacity-100 delay-100' : 'scale-y-0 delay-100 opacity-0 max-h-0'}
        ${roll.outside && roll.outside?.length !== 0 ? 'block' : 'hidden'}
        max-h-20 origin-bottom duration-200 flex gap-2
      `}>
        <span className="italic">
          Outside:
        </span>
        <div className="flex gap-1 flex-wrap">
          {roll.outside?.map(ing => (
            <Ingredient key={ing} id={ing} />
          ))}
        </div>
      </div>
      <div className={`${isOpen ? 'scale-y-100 opacity-100 delay-100' : 'scale-y-0 opacity-0 max-h-0'}
        ${roll.decor && roll.decor?.length !== 0 ? 'block' : 'hidden'}
        max-h-20 origin-bottom duration-200 flex gap-2
      `}>
        <span className="italic">
          Decor:
        </span>
        <div className="flex gap-1 flex-wrap">
          {roll.decor?.map(ing => (
            <Ingredient key={ing} id={ing} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;