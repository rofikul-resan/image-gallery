import GalleryHeader from "./components/GalleryHeader";
import ImageContener from "./components/ImageContener";

const App = () => {
  return (
    <div>
      <div className="bg-white rounded-md border-2 shadow-sm  ">
        <GalleryHeader />
        <div className="grid md:grid-cols-3 lg:grid-cols-5 p-3 gap-3 row-height ">
          <ImageContener className={"col-span-2 row-span-2 main-container"} />
          <ImageContener className={"main-container"} />
          <ImageContener className={"main-container"} />
          <ImageContener className={"main-container"} />
          <ImageContener className={"main-container"} />
          <ImageContener className={"main-container"} />
          <ImageContener className={"main-container"} />
          <ImageContener className={"main-container"} />
          <ImageContener className={"main-container"} />
          <ImageContener className={"main-container"} />
          <ImageContener className={"main-container"} />
          <ImageContener className={"main-container"} />
          <ImageContener className={"main-container"} />
        </div>
      </div>
    </div>
  );
};

export default App;
