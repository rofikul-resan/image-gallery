const AddImageContainer = () => {
  return (
    <div
      style={{ borderStyle: "dashed" }}
      className="bg-[#fafbfb] hover:scale-105 duration-150 hover:bg-black/25  border-[#dbdcdf] border rounded-md flex items-center justify-center h-full"
    >
      <div>
        <img src="/images/add-image.png" alt="" className="w-10 mx-auto" />
        <div className="mt-3">
          <p className="font-semibold">Add Image</p>
        </div>
      </div>
    </div>
  );
};

export default AddImageContainer;
