'use client';

import data from "@/public/constants/data";
import SectionButton from "./SectionButton";
import { getConrast } from "@/public/composables/getConrast";

const Footer = () => {
  return (
    <footer className="
      h-40
      py-2 px-3 rounded-b bg-cyan-900
      flex md:justify-center gap-1.5 md:gap-3
      overflow-scroll hide-scrollbar
    ">
      {data.sections.map(section => (
        <SectionButton key={section.id} id={section.id} />
      ))}
    </footer>
  );
}

export default Footer;