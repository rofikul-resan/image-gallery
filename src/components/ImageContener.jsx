const ImageContener = ({ className }) => {
  return (
    <div className={`relative rounded-md border border-[#dbdcdf] ${className}`}>
      <input
        type="checkbox"
        className="rounded-sm absolute z-20 top-3 left-3 "
      />
      <div className=" inset-0 overflow-hidden flex items-center justify-center bg-black">
        <img
          src="/images/image-1.webp"
          alt="image for gallery"
          className="w-fit mx-auto max-h-72"
        />
      </div>
    </div>
  );
};

export default ImageContener;
