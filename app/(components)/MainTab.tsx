'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../(redux)/store";
import data from "@/public/constants/data";
import ItemCard from "./ItemCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { setTab } from "@/app/(redux)/(reducers)/firstSlice";
import SetCard from "./SetCard";

interface MainTabProps {
  id: number;
  search: string;
};

const MainTab = ({ id, search }: MainTabProps) => {
  const { tab } = useSelector((state: RootState) => state.first);
  const { sort } = useSelector((state: RootState) => state.first);
  const { ref, inView } = useInView({
    threshold: .5,
  });
  const dispatch = useDispatch();

  const rolls = data.rolls;
  const categorized = id === 45714 ? rolls : rolls.filter(roll => roll.section === id);
  const filtered = categorized.filter(roll => roll.name.includes(search));
  const sorted = filtered.sort((a, b) => sort === 'Default' ? a.index - b.index :
    sort === 'A - Z' ? a.name.localeCompare(b.name) :
      sort === 'Z - A' ? b.name.localeCompare(a.name) :
        sort === 'by Popularity' ? b.popularity - a.popularity :
          sort === 'by Difficulty' ? b.difficulty - a.difficulty :
            b.index - a.index);


  const allSets = data.sets;
  const sets = allSets.filter(item => item.name.includes(search));

  const tabsNodeList: NodeListOf<Element> = document.querySelectorAll('.check');
  const tabs = Array.from(tabsNodeList);

  const handleChange = (id: number) => {
    tab !== id ? dispatch(setTab(id)) : '';
  };

  useEffect(() => {
    let className = Number(tabs.find(item => item?.checked)?.className.split(' ')[0]);
    className ? handleChange(className) : '';
  }, [tabs]);

  return (
    <>
      <div ref={ref} className={`relative p-2 flex flex-col gap-1.5 w-full h-full shrink-0 snap-start overflow-y-scroll`}>
        <input
          type="checkbox"
          className={`${id} absolute check appearance-none`}
          checked={inView}
          onChange={() => alert(id)}
        />
        {id !== 58103 ? sorted.map(item => (
          <ItemCard key={item.id} id={item.id} />
        )) : sets.map(set => (
          <SetCard key={set.id} id={set.id} />
        ))}
      </div>
    </>
  );
}

export default MainTab;