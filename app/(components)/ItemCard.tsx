'use client';

import Image from "next/image";
import Details from "./Details";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import data from "@/public/constants/data";

import { Poppins } from 'next/font/google';
const poppins = Poppins({
  weight: ['400', '500'],
  subsets: ['latin'],
});


interface ItemCardProps {
  id: number;
  className?: string;
  amount?: number;
};

const ItemCard = ({ id, className = '', amount = 0 }: ItemCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const roll = data.rolls.find(roll => roll.id === id) || data.rolls[0];

  return (
    <div onClick={() => setIsOpen(!isOpen)} className={`item-card w-full relative
      px-3 ${isOpen ? 'pt-3 pb-4 max-h-80' : 'pt-1.5 pb-2 max-h-20'} duration-200 ease-in-out
      bg-white shadow-xl rounded flex items-center justify-between gap-4 cursor-pointer
      ${className} 
    `}>
      {/* image */}
      <div className="shrink-0 w-16 aspect-square relative bg-cyan-600/30 flex items-center justify-center rounded-full">
        <Image src={roll.src} alt='alt' layout="cover" className="w-2/3" />
      </div>
      {/* block */}
      <div className={`duration-200 grow`}>
        <h3 className={`${poppins.className} ${isOpen ? '' : 'delay-100'} duration-200
          absolute ${isOpen ? 'top-3' : 'top-1/2 -translate-y-1/2'}
          capitalize font-medium text-lg sm:text-xl md:text-2xl sm:tracking-wide md:tracking-wide
        `}>
          {roll.name}
          {/* amount */}
          <span className={`${amount !== 0 ? 'block' : 'hidden'}
            absolute top-1/2 -translate-y-1/2 -right-3 translate-x-full
            font-normal text-lg text-gray-600 italic lowercase whitespace-nowrap
          `}>
            {amount} pcs
          </span>
        </h3>
        <Details id={id} isOpen={isOpen} />
      </div>
      {/* button */}
      <button className="w-9 aspect-square bg-cyan-600/30 flex items-center justify-center rounded-full">
        <ChevronDown className={`${isOpen ? '-scale-y-100' : ''} duration-300`} />
      </button>
    </div>
  );
}

export default ItemCard;