'use client';

import data from "@/public/constants/data";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../(redux)/store";
import { setTab } from "../(redux)/(reducers)/firstSlice";

interface SectionButtonProps {
  id: number;
};

const SectionButton = ({ id }: SectionButtonProps) => {
  const { tab } = useSelector((state: RootState) => state.first);
  const dispatch = useDispatch();

  const section = data.sections.find(section => section.id === id) || data.sections[0];

  const handleClick = () => {
    // dispatch(setTab('f'));
    // there I am finding the main container with horizontally located divs for each section, then finding out their width (or accurately speaking the screen width for any device) and scrolling it to this amount of pixels.. I swear it makes sense
    const cont = document.querySelector('.section-container');
    const width = window.innerWidth;
    let idx;

    data.sections.map((section, index) => section.id === id ? idx = index : '');

    cont?.scrollTo({
      top: 0,
      left: idx ? idx * width : 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={() => handleClick()}
      className={`${tab === id ? 'bg-cyan-950 border-white text-white' : 'bg-white hover:bg-white/20 hover:text-white border-cyan-950 text-cyan-950'} border-2 duration-200 ease-in-out
        relative grow-0 shrink-0 aspect-square p-2 flex flex-col items-center justify-center gap-0.5 rounded
        `}
    >
      <Image src={section?.src} alt='name' layout='cover' className="w-10 aspect-square object-cover" />
      <span className="font-medium text-inherit capitalize">
        {section.name}
      </span>
    </button>
  );
}

export default SectionButton;