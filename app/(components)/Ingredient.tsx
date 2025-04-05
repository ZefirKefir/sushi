import { getConrast } from "@/public/composables/getConrast";
import data from "@/public/constants/data";
import images from "@/public/constants/images";
import Image from "next/image";

import { Ubuntu } from "next/font/google";
import { FastAverageColor } from "fast-average-color";
const noto = Ubuntu({
  weight: '400',
  subsets: ['latin']
});

interface IngredientProps {
  id: number;
};

const Ingredient = ({ id }: IngredientProps) => {
  const fac = new FastAverageColor();
  const ingredient = data.ingredients.find(ing => ing.id === id);

  const imgElem: HTMLImageElement = document.querySelector('.ing-' + id.toString()) || document.createElement('img');
  const color = fac.getColor(imgElem);

  return (
    <div className={`${noto.className} xyecoc flex items-center gap-1 px-1.5 pl-0.5 py-0.5 rounded-2xl hover:scale-105 hover:duration-500 duration-100 ${ingredient?.bg === '#ffffff' ? 'border border-black' : ''}`}
      // style={{ backgroundColor: ingredient?.bg, color: getConrast(ingredient?.bg ? ingredient.bg : '#fff') }}
      style={{ backgroundColor: color.hex, color: color.isDark ? '#fff' : '#000' }}
    >
      <Image
        src={ingredient?.img || images.temp}
        alt={ingredient?.name[0] || 'ingredient'}
        layout="cover"
        className={`ing-${id} w-5 xs:w-6 md:w-8 aspect-square p-0.5 rounded-full bg-white`}
      />
      <span className="text-[0.90625rem]">
        {ingredient?.name[0]}
      </span>
    </div>
  )
}

export default Ingredient;