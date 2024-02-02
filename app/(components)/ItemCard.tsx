import images from "@/public/constants/images";
import { ChevronDown } from "lucide-react";
import Image from "next/image";



interface ItemCardProps {
  title: string;
  type: number;
  inside: Array<number>;
  outside: Array<number>;
  feature?: string;
};



const ItemCard = ({ title, type, inside, outside, feature = '' }: ItemCardProps) => {

  const imageSrc = type === 15916 ? images.section.hosomaki :
    type === 17718 ? images.section.futomaki :
      type === 23155 ? images.section.uramaki.one :
        type === 84813 ? images.section.uramaki.two :
          type === 41328 ? images.section.nigiri : images.temp;

  return (
    <div className="w-full bg-white shadow-xl rounded flex items-center justify-between gap-4 p-3">
      {/* image */}
      <div className="w-16 aspect-square relative bg-purple-200 flex items-center justify-center rounded-full">
        <Image src={imageSrc} alt='alt' layout="cover" className="w-2/3" />
      </div>
      {/* block */}
      <div className="grow">
        <h3 className="capitalize font-bold text-xl">
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