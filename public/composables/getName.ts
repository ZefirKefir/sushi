import data from "../constants/data";

const getName = (ingId: number | string) => {
  let str = '';
  data.ingredients.map(ing => ing.id === ingId ? str += ing.name[0] : '');
  return str;
};

export default getName;