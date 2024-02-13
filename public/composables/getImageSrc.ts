import images from "../constants/images";

export const getImageSrc = (type: number) => {
  return type === 15916 ? images.section.hosomaki :
    type === 17718 ? images.section.futomaki :
      type === 23155 ? images.section.uramaki.one :
        type === 84813 ? images.section.uramaki.two :
          type === 41328 ? images.section.nigiri : images.temp;
};