import { useContext } from "react";
import { FuncContext } from "../Provider/MainFunProvider";

const GalleryHeader = () => {
  const { selected } = useContext(FuncContext);
  return (
    <div className=" px-5 mx-auto border-b border-[#dbdcdf] py-1 my-1">
      {selected.length < 1 ? (
        <div>
          <h1 className="font-semibold text-2xl">Gallery</h1>
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="flex items-center gap-3 text-xl font-semibold">
            <input type="checkbox" className="rounded-sm" checked />
            <p> {selected.length} Files Selected </p>
          </div>
          <div className="text-[#e62305] cursor-pointer hover:underline">
            Delete Files{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryHeader;
