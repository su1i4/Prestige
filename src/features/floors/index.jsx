import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { ReactComponent as Logo } from "../../shared/icons/DarkLogo.svg";
import { Application } from "../../shared/components/application";
import { floors } from "../../lib/data";
import { useNavigate } from "react-router-dom";

const HighlightArea = ({ children }) => (
  <div className="relative w-full h-auto aspect-[4/3]">
    <svg
      className="absolute top-[-100px] lg:top-[-75px] sm:mt-[50px] xs:mt-[30px] left-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid meet"
    >
      {children}
    </svg>
  </div>
);

const HighlightPath = ({
  d,
  isActive,
  x,
  y,
  width,
  height,
  onMouseEnter,
  onClick,
  scale,
}) => (
  <svg
    x={x}
    y={y}
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d={d}
      className={`${
        isActive ? "fill-[#2756FC66]" : "fill-transparent"
      } cursor-pointer pointer-events-auto`}
      style={{ transform: `scale(${scale})` }}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    />
  </svg>
);

export const Floors = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const thisFloor = floors[13 - id];

  const [activeFloorIndex, setActiveFloorIndex] = useState(null);
  const [updatedFloorsImages, setUpdatedFloorsImages] = useState(
    thisFloor.floorsImages
  );

  const handleFloorActivate = (e, index) => {
    setActiveFloorIndex(index);
    const updatedImages = updatedFloorsImages.map((img, idx) =>
      idx === index ? { ...img, x: img.x + 10, y: img.y + 10 } : img
    );
    setUpdatedFloorsImages(updatedImages);
  };

  console.log(
    thisFloor.squints[String(activeFloorIndex + 1)].name,
    "this is floorIndex"
  );

  return (
    <div className="w-full px-10 sm:px-4 xs:px-2 py-2">
      <div className="w-full flex items-center justify-between">
        <IoArrowBack
          onClick={() => navigate(-1)}
          size={30}
          className="cursor-pointer"
        />
        <p className="text-[50px] main-font lg:text-[40px] sm:text-[30px] xs:text-[20px] font-[500] noselect">
          Типовой план {id} этажа
        </p>
        <div onClick={() => navigate('/')} className="cursor-pointer" >
          <Logo />
        </div>
      </div>
      <div className="">
        <HighlightArea>
          <image
            xlinkHref={thisFloor.image}
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          />
          {thisFloor.floorsImages.map((floor, index) => (
            <>
              <React.Fragment key={index}>
                <HighlightPath
                  d={floor.path}
                  isActive={activeFloorIndex === index}
                  onMouseEnter={(e) => handleFloorActivate(e, index)}
                  onClick={(e) => handleFloorActivate(e, index)}
                  width={floor.width}
                  height={floor.height}
                  y={floor.y}
                  x={floor.x}
                  scale={floor.scale}
                />
              </React.Fragment>
            </>
          ))}
        </HighlightArea>
      </div>
      <div className="mt-[-200px] lg:mt-[-70px] ">
        <Application
          square={thisFloor.squints[String(activeFloorIndex + 1)].square}
          lock={thisFloor.squints[String(activeFloorIndex + 1)].lock}
          name={thisFloor.squints[String(activeFloorIndex + 1)].name}
        />
      </div>
    </div>
  );
};
