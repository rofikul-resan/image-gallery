import { createContext, useState } from "react";

export const FuncContext = createContext();

const MainFunProvider = ({ children }) => {
  let funcValue = {};
  const imageArr = [
    "/images/image-1.webp",
    "/images/image-2.webp",
    "/images/image-3.webp",
    "/images/image-4.webp",
    "/images/image-5.webp",
    "/images/image-6.webp",
    "/images/image-7.webp",
    "/images/image-8.webp",
    "/images/image-9.webp",
    "/images/image-10.jpeg",
    "/images/image-11.jpeg",
  ];

  const [images, setImages] = useState(imageArr);
  const [selected, setSelected] = useState([]);

  // value
  funcValue.images = images;
  funcValue.selected = selected;

  // handler
  funcValue.selectImage = (img) => {
    setSelected([...selected, img]);
  };
  funcValue.removeSelectedImg = (img) => {
    const remain = selected.filter((image) => image !== img);
    setSelected(remain);
  };
  return (
    <FuncContext.Provider value={funcValue}>{children}</FuncContext.Provider>
  );
};

export default MainFunProvider;
