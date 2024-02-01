import images from "@/public/constants/images";
import { ArrowDown, ArrowDown01, ArrowDownIcon, ChevronDown } from "lucide-react";
import Image from "next/image";

interface ItemCardProps {
  title: string;
  type: number;
  inside: Array<number>;
  outside: Array<number>;
  feature?: string;
};

const ItemCard = ({ title, type, inside, outside, feature = '' }: ItemCardProps) => {
  return (
    <div className="w-full bg-white shadow-xl rounded flex items-center justify-between gap-4 p-3">
      {/* image */}
      <div className="w-16 aspect-square relative bg-purple-200 flex items-center justify-center rounded-full">
        <Image src={images.temp} alt='alt' layout="cover" className="w-2/3" />
      </div>
      {/* block */}
      <div className="grow">
        <h3>
          {title}
        </h3>
        <p>descr 1</p>
        <p>descr 2</p>
      </div>
      {/* button */}
      <button className="w-9 aspect-square bg-amber-200 flex items-center justify-center rounded-full">
        <ChevronDown />
      </button>
    </div>
  );
}

export default ItemCard;