import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../(redux)/store";

import MainTab from "./MainTab";
import data from "@/public/constants/data";


interface MainProps {
  search: string;
};
const Main = ({ search }: MainProps) => {
  const { tab } = useSelector((state: RootState) => state.first);

  const rolls = data.rolls;
  const categorized = tab === 45714 ? rolls : rolls.filter(roll => roll.section === tab);

  const filtered = categorized.filter(roll => roll.name.includes(search));

  const handleScroll = () => {
    // console.log('scrolled');
  }

  useEffect(() => {

  }, []);

  return (
    <main className="grow bg-[#eee] h-full overflow-y-hidden hide-scrollbar">
      <div onScroll={() => handleScroll()} className="section-container w-full h-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory">
        {data.sections.map(section => (
          <MainTab key={section.id} id={section.id} search={search} />
        ))}
      </div>
    </main>
  );
}

export default Main;