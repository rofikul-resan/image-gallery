import { useContext, useEffect, useState } from "react";
import { FuncContext } from "../Provider/MainFunProvider";

const ImageContainer = ({ image, className }) => {
  const [checked, setChecked] = useState(false);
  const { selectImage, removeSelectedImg } = useContext(FuncContext);
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
  }, [image]);
  return (
    <div
      className={`relative rounded-md border border-[#dbdcdf] ${
        checked && "opacity-50"
      } main-container overflow-hidden `}
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
        <img src={image} alt="image" className="w-fit mx-auto" />
      </div>
    </div>
  );
};

export default ImageContainer;
