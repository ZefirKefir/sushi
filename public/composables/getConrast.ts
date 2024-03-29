// I've decided to use YIQ method

export const getConrast = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return yiq >= 128 ? 'black' : 'white';

  // 2nd method
  // const color = hex.slice(1);
  // return (parseInt(color, 16) > 0xffffff / 2) ? '#2a2a2a' : '#fff'
};