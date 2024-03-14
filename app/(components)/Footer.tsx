'use client';

import data from "@/public/constants/data";
import dynamic from "next/dynamic";

const DynamicSectionButton = dynamic(() => import('./SectionButton'), {
  ssr: false,
});

const Footer = () => {
  return (
    <footer className="
      h-40
      py-2 px-3 bg-cyan-900
      flex md:justify-center gap-1.5 md:gap-3
      overflow-scroll hide-scrollbar
    ">
      <>
        {data.sections.map(section => (
          <DynamicSectionButton key={section.id} id={section.id} />
        ))}
      </>
    </footer>
  );
}

export default Footer;