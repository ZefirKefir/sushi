'use client';

import data from "@/public/constants/data";
import images from "@/public/constants/images";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ItemCard from "./ItemCard";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

interface SetCardProps {
  id: number;
};

const SetCard = ({ id }: SetCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    !(e.target as HTMLDivElement).closest('.item-card') && setIsOpen(!isOpen);
    setTimeout(() => {
      const target = (e.target as HTMLDivElement).closest('.item-card');
      const hilt = (e.target as HTMLDivElement).closest('.set-card');
      hilt && !target && hilt.scrollIntoView({ behavior: 'smooth' });
    }, isOpen ? 200 : 333);
  };

  const set = data.sets.find(set => set.id === id);

  return (
    <div onClick={(e) => handleClick(e)} className={`xs:w-full set-card
      bg-cyan-800/90 xs:bg-cyan-200/30 shadow-xl rounded flex items-center justify-between gap-4
      p-3 ${isOpen ? 'pb-8' : 'pb-4'}
      cursor-pointer duration-[1.5s] max-h-[250rem] relative
    `}>
      {/* image */}
      <div className={`
        ${isOpen ? 'scale-x-0 md:scale-x-100 opacity-0 md:opacity-100 max-w-0 md:max-w-20' : 'xs:scale-x-100 xs:opacity-100 xs:max-w-20'}
        duration-300 shrink-0 xs:w-16 xs:aspect-square xs:relative xs:bg-cyan-600/30 flex items-center justify-center rounded-full
        absolute top-0 left-0 w-full h-full overflow-hidden blur-sm xs:blur-0
        `}>
        <Image src={images.sets} alt='alt' layout="cover" className="w-2/3" />
      </div>
      {/* block */}
      <div className="relative grow flex flex-col gap-1 xs:max-w-[85%] min-h-16">
        <h3 className={`${poppins.className}
          absolute top-2 left-0 px-2 xs:px-0 rounded
          duration-200 capitalize font-medium text-2xl tracking-wide
          bg-cyan-200/40 xs:bg-inherit
        `}>
          {set?.name}
        </h3>
        {/* closed */}
        <div className={`${!isOpen ? 'delay-[.2s] scale-y-100 opacity-100 pt-11 xs:pt-10 max-h-[40rem]' : 'scale-y-0 opacity-0 max-h-0'}
          origin-top duration-300 xs:flex gap-x-4 flex-wrap
        `}>
          {set?.composition?.map(roll => (
            <p key={roll.id} className="
            font-medium text-lg text-gray-700 italic capitalize bg-white/50 xs:bg-inherit mb-px rounded
            ">
              {data.rolls.find(item => item.id === roll.id)?.name}
              <span className="
                ml-1.5 inline-block lowercase text-inherit
                before:content-['x'] before:inline-block before:mr-0.5
              ">
                {roll.amount}
              </span>
            </p>
          ))}
        </div>
        {/* open */}
        <div className={`${isOpen ? 'delay-[.2s] scale-y-100 opacity-100 pt-12 max-h-[1000rem]' : 'scale-y-0 opacity-0 max-h-0'}
          origin-top duration-300 w-full flex flex-col gap-1
        `}>
          {set?.composition?.map(roll => (
            // <p>chuj</p>
            <ItemCard key={roll.id} id={roll.id} amount={roll.amount} />
          ))}
        </div>
      </div>
      {/* button */}
      <button className="w-9 shrink-0 aspect-square bg-cyan-600/30 hidden xs:flex items-center justify-center rounded-full">
        <ChevronDown className={`${isOpen ? '-scale-y-100' : ''} duration-300`} />
      </button>
    </div>
  );
}

export default SetCard;