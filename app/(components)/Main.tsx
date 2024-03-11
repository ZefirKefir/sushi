'use client'

import dynamic from "next/dynamic";
import data from "@/public/constants/data";


const DynamicMainTab = dynamic(() => import('./MainTab'), {
  ssr: false,
});

interface MainProps {
  search: string;
};
const Main = ({ search }: MainProps) => {
  return (
    <main className="grow bg-[#eee] h-full overflow-y-hidden hide-scrollbar">
      <div className="section-container w-full h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory">
        {data.sections.map(section => (
          <DynamicMainTab key={section.id} id={section.id} search={search} />
        ))}
      </div>
    </main>
  );
}

export default Main;