const ImageContener = ({ className }) => {
  return (
    <div
      className={`relative rounded-md border border-[#dbdcdf] ${className} overflow-hidden `}
    >
      <input
        type="checkbox"
        className="rounded-sm absolute z-20 top-3 left-3 "
      />
      <div
        style={{
          background: `url(${"/images/image-1.webp"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`inset-0 overflow-hidden w-full justify-center h-full hover-wrapper`}
      >
        {/* <img src="/images/image-1.webp" alt="image for gallery" /> */}
      </div>
    </div>
  );
};

export default ImageContener;
