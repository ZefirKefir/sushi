'use client';

import data from "@/public/constants/data";
import images from "@/public/constants/images";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

import { Manrope } from 'next/font/google'
import { useState } from "react";
import Details from "./Details";

const manrope = Manrope({
  weight: ['400', '700'],
  subsets: ['latin'],
})


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
      px-3 ${isOpen ? 'pt-3 pb-4 max-h-52' : 'pt-1.5 pb-2 max-h-20'} duration-200 ease-in-out
      bg-white shadow-xl rounded flex items-center justify-between gap-4 cursor-pointer
      ${className} 
    `}>
      {/* image */}
      <div className="shrink-0 w-16 aspect-square relative bg-cyan-600/30 flex items-center justify-center rounded-full">
        <Image src={roll.src} alt='alt' layout="cover" className="w-2/3" />
      </div>
      {/* block */}
      <div className={`duration-200 grow`}>
        <h3 className={`${manrope.className} ${isOpen ? '' : 'delay-100'} duration-200
          absolute ${isOpen ? 'top-3' : 'top-1/2 -translate-y-1/2'}
          capitalize font-bold text-2xl tracking-wide
        `}>
          {roll.name}
          {/* amount */}
          {/* remove that later */}
          <span className={`${amount !== 0 ? 'block' : 'hidden'}
            absolute top-1/2 -translate-y-1/2 -right-5 translate-x-full
            font-normal text-xl text-gray-600 italic lowercase whitespace-nowrap
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