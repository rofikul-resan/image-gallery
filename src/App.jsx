import { useContext } from "react";
import AddImageContainer from "./components/AddImageContainer";
import GalleryHeader from "./components/GalleryHeader";
import ImageContainer from "./components/ImageContainer";
import { FuncContext } from "./Provider/MainFunProvider";

const App = () => {
  const { images } = useContext(FuncContext);
  return (
    <div>
      <div className="bg-white rounded-md border-2 shadow-sm  ">
        <GalleryHeader />
        <div className="grid md:grid-cols-3 lg:grid-cols-5 p-3 gap-3 row-height ">
          {images.map((img, index) =>
            index === 0 ? (
              <ImageContainer
                className={"col-span-2 row-span-2"}
                key={index}
                image={img}
              />
            ) : (
              <ImageContainer key={index} image={img} />
            )
          )}

          <AddImageContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
