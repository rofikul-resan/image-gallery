import { motion, useDragControls } from "framer-motion";

const MotionContainer = ({
  children,
  index,
  image,
  dragStart,
  dragEnd,
  dragOver,
}) => {
  const controls = useDragControls();

  const startDarg = (event) => {
    controls.start(event, { snapToCursor: false });
  };
  return (
    <div onPointerDown={startDarg} className="z-20">
      <motion.div
        key={index}
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15, type: "tween" }}
        className={"z-10"}
        draggable
        onDragStart={(e) => dragStart(e, image, index)}
        onDragOver={(e) => dragOver(e, image, index)}
        onDragEnd={dragEnd}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MotionContainer;
