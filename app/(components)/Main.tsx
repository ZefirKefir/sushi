import data from "@/public/constants/data";
import ItemCard from "./ItemCard";

const Main = () => {
  return (
    <main className="grow bg-purple-200 overflow-y-scroll hide-scrollbar">
      <div className="flex flex-col gap-1.5 bg-[#eee] p-3">
        {data.rolls.map(item => (
          <ItemCard title={item.name} type={item.section} inside={item.inside} outside={item.outside} feature={item?.feature} />
        ))}
      </div>
    </main>
  );
}

export default Main;