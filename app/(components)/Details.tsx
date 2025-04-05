'use client';

import Ingredient from "./Ingredient";
import data from "@/public/constants/data";
import { useEffect, useState } from "react";

interface DetailsProps {
  id: number;
  isOpen: boolean;
  className?: string;
};

const Details = ({ id, isOpen, className = '' }: DetailsProps) => {
  const [height, setHeight] = useState(0);
  const roll = data.rolls.find(roll => roll.id === id) || data.rolls[0];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(window.document.getElementById(id.toString())?.offsetHeight || 0);
    }

  }, []);
  return (
    <div className={
      `${className} flex flex-col ${isOpen ? 'justify-end' : 'justify-center'}
      ${isOpen ? 'gap-1 pt-10 max-h-[30rem]' : 'gap-0 pt-0 max-h-0'} duration-200
    `}>
      <div id={id.toString()} className={`${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 max-h-0'}
        ${roll.inside && roll.inside?.length !== 0 ? 'block' : 'hidden'}
        max-h-80 origin-bottom duration-200 flex gap-2
      `}>
        <span className={`italic md:mt-1.5 duration-100 ${isOpen ? 'delay-75 opacity-100' : 'opacity-0'}`}>
          Inside:
        </span>
        <div className={`flex gap-1 flex-wrap duration-100 ${isOpen ? 'delay-75 opacity-100' : 'opacity-0'}`}>
          {roll.inside?.map(ing => (
            <Ingredient key={ing} id={ing} />
          ))}
        </div>
      </div>
      <div className={`${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 max-h-0'}
        ${roll.outside && roll.outside?.length !== 0 ? 'block' : 'hidden'}
        max-h-80 origin-bottom duration-200 flex gap-2
      `}>
        <span className={`italic md:mt-1.5 duration-100 ${isOpen ? 'delay-75 opacity-100' : 'opacity-0'}`}>
          Outside:
        </span>
        <div className={`flex gap-1 flex-wrap duration-100 ${isOpen ? 'delay-75 opacity-100' : 'opacity-0'}`}>
          {roll.outside?.map(ing => (
            <Ingredient key={ing} id={ing} />
          ))}
        </div>
      </div>
      <div className={`${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 max-h-0'}
        ${roll.decor && roll.decor?.length !== 0 ? 'block' : 'hidden'}
        max-h-80 origin-bottom duration-200 flex gap-2
      `}>
        <span className={`italic md:mt-1.5 duration-100 ${isOpen ? 'delay-75 opacity-100' : 'opacity-0'}`}>
          Decor:
        </span>
        <div className={`flex gap-1 flex-wrap duration-100 ${isOpen ? 'delay-75 opacity-100' : 'opacity-0'}`}>
          {roll.decor?.map(ing => (
            <Ingredient key={ing} id={ing} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;