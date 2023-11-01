import { useContext, useEffect, useState } from "react";
import { FuncContext } from "../Provider/MainFunProvider";

const ImageContainer = ({ image, dragStart, dragEnd, dragOver, index }) => {
  const [checked, setChecked] = useState(false);
  const { selectImage, removeSelectedImg, images } = useContext(FuncContext);
  const handleSelect = (isSelected, image) => {
    setChecked(isSelected);
    if (isSelected) {
      selectImage(image);
    } else {
      removeSelectedImg(image);
    }
  };

  useEffect(() => {
    setChecked(false);
  }, [images.length]);
  return (
    <>
      <div
        className={`relative rounded-md border border-[#dbdcdf] ${
          checked && "opacity-50"
        } main-container overflow-hidden shadow-md h-full `}
        draggable
        onDragStart={(e) => dragStart(e, image, index)}
        onDragOver={(e) => dragOver(e, image, index)}
        onDragEnd={dragEnd}
      >
        <input
          type="checkbox"
          className="rounded-sm absolute z-20 top-3 left-3 "
          onChange={(e) => handleSelect(e.target.checked, image)}
          checked={checked}
        />
        <div
          className={`inset-0 overflow-hidden w-full justify-center h-full hover-wrapper`}
        >
          <img src={image} alt="image" className="w-full h-full  mx-auto" />
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
