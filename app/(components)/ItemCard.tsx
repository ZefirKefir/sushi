'use client';

import getName from "@/public/composables/getName";
import data from "@/public/constants/data";
import images from "@/public/constants/images";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Ingredient from "./Ingredient";

import { Manrope } from 'next/font/google'
import { useState } from "react";
import { getImageSrc } from "@/public/composables/getImageSrc";

const manrope = Manrope({
  weight: '700',
  subsets: ['latin'],
})


interface ItemCardProps {
  id: number;
};

const ItemCard = ({ id }: ItemCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const roll = data.rolls.find(roll => roll.id === id) || data.rolls[0];

  return (
    <div onClick={() => setIsOpen(!isOpen)} className="w-full bg-white shadow-xl rounded flex items-center justify-between gap-4 p-3 pb-4 cursor-pointer">
      {/* image */}
      <div className="w-16 aspect-square relative bg-cyan-600/30 flex items-center justify-center rounded-full">
        <Image src={roll.src} alt='alt' layout="cover" className="w-2/3" />
      </div>
      {/* block */}
      <div className="grow flex flex-col gap-1">
        <h3 className={`${manrope.className} ${isOpen ? 'mb-0.5' : 'mb-0 translate-y-4 delay-100'} duration-200 capitalize font-bold text-2xl tracking-wide`}>
          {roll.name}
        </h3>
        <div className={`${isOpen ? 'scaley-y-100 opacity-100 delay-100' : 'scale-y-0 delay-100 opacity-0 max-h-0'} origin-top duration-200 flex gap-1 flex-wrap`}>
          Inside:
          {' '}
          {roll.inside.map(ing => (
            <Ingredient name={getName(ing)} />
          ))}
        </div>
        <div className={`${isOpen ? 'scaley-y-100 opacity-100 delay-100' : 'scale-y-0 opacity-0 max-h-0'} max-h-20 origin-top duration-200 flex gap-1 flex-wrap`}>
          Outside:
          {roll.outside.map(ing => (
            <Ingredient name={getName(ing)} />
          ))}
        </div>
      </div>
      {/* button */}
      <button className="w-9 aspect-square bg-cyan-600/30 flex items-center justify-center rounded-full">
        <ChevronDown className={`${isOpen ? '-scale-y-100' : ''} duration-300`} />
      </button>
    </div>
  );
}

export default ItemCard;