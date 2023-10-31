import { useContext } from "react";
import { FuncContext } from "../Provider/MainFunProvider";

const ImageContainer = ({ image, className }) => {
  const { selectImage, removeSelectedImg } = useContext(FuncContext);
  const handleSelect = (isSelected, image) => {
    if (isSelected) {
      selectImage(image);
    } else {
      removeSelectedImg(image);
    }
  };
  return (
    <div
      className={`relative rounded-md border border-[#dbdcdf] ${className} main-container overflow-hidden `}
    >
      <input
        type="checkbox"
        className="rounded-sm absolute z-20 top-3 left-3 "
        onChange={(e) => handleSelect(e.target.checked, image)}
      />
      <div
        style={{
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`inset-0 overflow-hidden w-full justify-center h-full hover-wrapper`}
      ></div>
    </div>
  );
};

export default ImageContainer;
