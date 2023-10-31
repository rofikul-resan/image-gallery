import GalleryHeader from "./components/GalleryHeader";
import ImageContener from "./components/ImageContener";

const App = () => {
  return (
    <div>
      <div className="bg-white rounded-md border-2 shadow-sm  ">
        <GalleryHeader />
        <div className="grid grid-cols-12">
          <ImageContener className={"col-span-3"} />
        </div>
      </div>
    </div>
  );
};

export default App;
