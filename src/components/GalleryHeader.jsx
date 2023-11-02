import { useContext, useState } from "react";
import { FuncContext } from "../Provider/MainFunProvider";

const GalleryHeader = () => {
  const [checked, setChecked] = useState(true);
  const { selected, deleteImage } = useContext(FuncContext);
  const handleDeleteImage = () => {
    deleteImage();
  };
  return (
    <div className=" px-5 mx-auto border-b border-[#dbdcdf] py-1 my-1 h-12 shadow-md">
      {selected.length < 1 ? (
        <div>
          <h1 className="font-semibold text-xl">Gallery</h1>
        </div>
      ) : (
        <div className="flex justify-between items-center my-auto ">
          <div className="flex items-center gap-3 text-xl font-semibold">
            <input
              type="checkbox"
              className="rounded-sm"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <p> {selected.length} Files Selected </p>
          </div>
          <div
            onClick={handleDeleteImage}
            className="text-[#e62305] cursor-pointer font-semibold hover:underline"
          >
            Delete Files{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryHeader;
