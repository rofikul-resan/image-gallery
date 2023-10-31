const ImageContener = ({ className }) => {
  return (
    <div className={`relative rounded-md border border-[#dbdcdf] ${className}`}>
      <input
        type="checkbox"
        className="rounded-sm absolute z-20 top-3 left-3 "
      />
      <div className=" inset-0 overflow-hidden">
        <img
          src="/images/image-1.webp"
          alt="image for gallery"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ImageContener;
