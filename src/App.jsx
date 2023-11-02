import { useContext, useState } from "react";
import AddImageContainer from "./components/AddImageContainer";
import GalleryHeader from "./components/GalleryHeader";
import ImageContainer from "./components/ImageContainer";
import { FuncContext } from "./Provider/MainFunProvider";

const App = () => {
  const { images, setImages } = useContext(FuncContext);
  const [draggedImage, setDraggedImage] = useState(null);

  const [draggedImageIndex, setDraggedImageIndex] = useState(null);
  const [positionIndex, setPositionIndex] = useState(null);

  const dragStart = (e, image, index) => {
    e.dataTransfer.effectAllowed = "move";
    setDraggedImage(image);
    setDraggedImageIndex(index);
    console.log("start", draggedImage, index);
  };

  // handle hovered box
  const dragOver = (e, image, index) => {
    e.preventDefault();
    setPositionIndex(index);
  };

  // handle drop
  const dragEnd = (e) => {
    console.log("end", e.dataTransfer.getData("imageId"));
    const newImageArr = [...images];
    newImageArr.splice(draggedImageIndex, 1);
    newImageArr.splice(positionIndex, 0, draggedImage);
    setImages(newImageArr);
    setDraggedImage(null);
    setPositionIndex(null);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-md border-2 shadow-sm  ">
          <GalleryHeader />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 p-6 gap-3 row-height ">
            {images.map((img, index) =>
              index === 0 ? (
                <div key={index} className={"sm:col-span-2 sm:row-span-2 "}>
                  <ImageContainer
                    key={index}
                    image={img}
                    index={index}
                    dragEnd={dragEnd}
                    dragOver={dragOver}
                    dragStart={dragStart}
                  />
                </div>
              ) : (
                <div key={index}>
                  <ImageContainer
                    key={index}
                    image={img}
                    index={index}
                    dragEnd={dragEnd}
                    dragOver={dragOver}
                    dragStart={dragStart}
                  />
                </div>
              )
            )}

            <AddImageContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
