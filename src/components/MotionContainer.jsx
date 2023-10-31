import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { FuncContext } from "../Provider/MainFunProvider";

const MotionContainer = ({ children, index, className, image }) => {
  const [draggedImage, setDraggedImage] = useState(null);
  const { images, setImages } = useContext(FuncContext);

  const onDragStart = (e, image) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("imageId", image.id);
    setDraggedImage(image);
  };

  const onDragOver = (e, image) => {
    e.preventDefault();
    if (image.id === draggedImage.id) return;
    const imagesCopy = [...images];
    const draggedIndex = imagesCopy.findIndex(
      (img) => img.id === draggedImage.id
    );
    const hoverIndex = imagesCopy.findIndex((img) => img.id === image.id);

    imagesCopy.splice(draggedIndex, 1);
    imagesCopy.splice(hoverIndex, 0, draggedImage);

    setImages(imagesCopy);
  };

  const onDragEnd = () => {
    setDraggedImage(null);
  };
  return (
    <motion.div
      key={index}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15, type: "tween" }}
      className={className}
      draggable
      onDragStart={(e) => onDragStart(e, image)}
      onDragOver={(e) => onDragOver(e, image)}
      onDragEnd={onDragEnd}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;
