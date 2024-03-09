// this function gets array of nigiris' ids and returns randomized ids which can be passed for sets

const randomizeNigiri = (arr: number[], amount: number) => {
  const pushToResult = (id: number) => {
    if (!temp.includes(id)) {
      result.push({ id: id, amount: avgAmount });
      temp.push(id);
      count--;
    }
  };

  let avgAmount = amount % 4 === 0 ? amount / 4 : Math.floor(amount / 4) + 1;
  let count = amount / avgAmount;
  // this is the amount of different sets of nigiris (the count);
  const temp: number[] = [];
  // this is the temporary array to exclude already existing nigiris;
  let randomId;
  const result: Object[] = [];

  pushToResult(419513);
  // it's salmon nigiri; we add it on every set;
  do {
    randomId = arr[Math.floor(Math.random() * arr.length)];
    pushToResult(randomId);
  } while (count !== 0);

  return result;
}

export default randomizeNigiri;