'use client';

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../(redux)/store";
import data from "@/public/constants/data";
import ItemCard from "./ItemCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { setTab } from "../(redux)/(reducers)/FirstSlice";

interface MainTabProps {
  id: number;
  search: string;
};

const MainTab = ({ id, search }: MainTabProps) => {
  const { tab } = useSelector((state: RootState) => state.first);
  const { ref, inView } = useInView({
    threshold: .5,
  });
  const dispatch = useDispatch();

  const rolls = data.rolls;
  const categorized = id === 45714 ? rolls : rolls.filter(roll => roll.section === id);
  const filtered = categorized.filter(roll => roll.name.includes(search));

  const tabsNodeList: NodeListOf<Element> = document.querySelectorAll('.check');
  const tabs = Array.from(tabsNodeList);
  console.log(tabs);

  const handleChange = (id: number) => {
    tab !== id ? dispatch(setTab(id)) : '';
  };

  useEffect(() => {
    let className = Number(tabs.find(item => item?.checked)?.className.split(' ')[0]);
    className ? handleChange(className) : '';
  }, [tabs]);

  return (
    <>
      <div ref={ref} className={`relative w-full h-full shrink-0 snap-start overflow-y-scroll`}>
        <input
          type="checkbox"
          className={`${id} check appearance-none`}
          checked={inView}
          onChange={() => alert(id)}
        />
        {id !== 58103 ? filtered.map(item => (
          <ItemCard key={item.id} id={item.id} />
        )) : 'sets'}
      </div>
    </>
  );
}

export default MainTab;