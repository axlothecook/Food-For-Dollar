
import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import './Slider.scss';
import imagesArray from './Images.js';

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 300,
  damping: 100,
};

const Slider = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);
  const DRAG_BUFFER = 50;

  // useEffect(() => {
  //   const intervalRef = setInterval(() => {
  //     const x = dragX.get();

  //     if (x === 0) {
  //       setImgIndex((pv) => {
  //           if (pv === imagesArray.length - 1) return 0;
  //           return pv + 1;
  //       });
  //     };
  //   }, 5000);

  //   return () => clearInterval(intervalRef);

  // }, []);

    const onDragEnd = () => {
      const x = dragX.get();

      if (x <= -DRAG_BUFFER && imgIndex < imagesArray.length - 1) {
        setImgIndex((pv) => pv + 1);
      } else if (x >= DRAG_BUFFER && imgIndex > 0) {
        setImgIndex((pv) => pv - 1);
      }
    };

    return <div className='slider-wrapper'>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className='slider-motion-div'
      >
        <Slides />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} imagesArray={imagesArray} />
    </div>
};

const Slides = () => {
  return (
    <>
      {imagesArray.map((image) => (
        <motion.div
        className='slide'
        key={image.id}
        transition={SPRING_OPTIONS}
        style={{
          backgroundImage: `url(${image.link})`
        }}
        > 
          <div 
          className="slide-child"
          style={{
            backgroundColor: `${image.colors.bgClr}`
          }}></div>
          <div className="slide-text-wrapper">
            <h1 style={{color: `${image.colors.mainClr}`}}>{image.text.main}</h1>
            <h2 style={{color: `${image.colors.subClr}`}}>{image.text.subMain}</h2>
            <h3 style={{color: `${image.colors.thirdClr}`}}>{image.text.h3}</h3>
            <h4 style={{color: `${image.colors.thirdClr}`}}>{image.text.h4}</h4>
          </div>
        </motion.div>
      ))}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className='ticking-bar'>
      {imagesArray.map((_, idx) => {
        return <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={idx === imgIndex ? 'current-btn' : 'general-btn'}
        >
          {idx === imgIndex && <div className='progress-bar'></div>}
        </button>
      })}
    </div>
  );
};

export default Slider;