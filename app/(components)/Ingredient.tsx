import { getConrast } from "@/public/composables/getConrast";
import data from "@/public/constants/data";

interface IngredientProps {
  id: number;
};

const Ingredient = ({ id }: IngredientProps) => {
  const ingredient = data.ingredients.find(ing => ing.id === id);

  return (
    <p className={`px-1.5 pb-0.5 rounded-md font-medium text-sm ${ingredient?.bg === '#ffffff' ? 'border border-black' : ''}`}
      style={{ backgroundColor: ingredient?.bg, color: getConrast(ingredient?.bg ? ingredient.bg : '#fff') }}>
      {ingredient?.name[0]}
    </p>
  )
}

export default Ingredient;