'use client';

import data from "@/public/constants/data";
import images from "@/public/constants/images";
import { ChevronDown } from "lucide-react";
import { Manrope } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import ItemCard from "./ItemCard";
import randomizeNigiri from "@/public/composables/randomizeNigiri";

const manrope = Manrope({
  weight: ['500', '700'],
  subsets: ['latin'],
})

interface SetCardProps {
  id: number;
};

const SetCard = ({ id }: SetCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: Event) => {
    // alert(e.target.closest('.item-card'))
    !e.target.closest('.item-card') && setIsOpen(!isOpen);
    setTimeout(() => {
      e.target.closest('.set-card').scrollIntoView({ behavior: 'smooth' });
    }, isOpen ? 200 : 333);
  };

  const set = data.sets.find(set => set.id === id);

  return (
    <div onClick={(e) => handleClick(e)} className={`w-full set-card
      bg-cyan-200/10 shadow-xl rounded flex items-center justify-between gap-4 p-3 pb-4 cursor-pointer
      duration-1000
    `}>
      {/* image */}
      <div className="shrink-0 w-16 aspect-square relative bg-cyan-600/30 flex items-center justify-center rounded-full">
        <Image src={images.sets} alt='alt' layout="cover" className="w-2/3" />
      </div>
      {/* block */}
      <div className="relative grow flex flex-col gap-1 w-[85%] min-h-16">
        <h3 className={`${manrope.className}
          absolute top-2 left-0
          duration-200 capitalize font-bold text-2xl tracking-wide
        `}>
          {set?.name}
        </h3>
        {/* closed */}
        <div className={`${!isOpen ? 'delay-[.2s] scale-y-100 opacity-100 pt-10 max-h-[40rem]' : 'scale-y-0 opacity-0 max-h-0'}
          origin-top duration-300 w-full flex gap-x-4 flex-wrap
        `}>
          {set?.composition?.map(roll => (
            <p className="font-medium text-xl text-gray-600 italic capitalize">
              {data.rolls.find(item => item.id === roll.id)?.name}
              <span className="
                ml-1.5 inline-block lowercase text-gray-600
                before:content-['x'] before:inline-block before:mr-0.5
              ">
                {roll.amount}
              </span>
            </p>
          ))}
        </div>
        {/* open */}
        <div className={`${isOpen ? 'delay-[.2s] scale-y-100 opacity-100 pt-12 max-h-[40rem]' : 'scale-y-0 opacity-0 max-h-0'}
          origin-top duration-300 w-full flex flex-col gap-1
        `}>
          {set?.composition?.map(roll => (
            <ItemCard key={roll.id} id={roll.id} amount={roll.amount} />
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

export default SetCard;