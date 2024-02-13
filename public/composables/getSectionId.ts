function getSectionId(object: object, value: string) {
  return Object.keys(object).find(key => object[key] === value);
}

export default getSectionId;