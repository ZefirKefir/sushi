interface IngredientProps {
  name: string;
};

const Ingredient = ({ name }: IngredientProps) => {
  return (
    <p className={`px-1.5 py-0.5  rounded-md text-sm bg-gray-900 text-white`}>
      {name}
    </p>
  );
}

export default Ingredient;