import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { Application } from "../../shared/components/application";
import { floors } from "../../lib/data";
import { useNavigate } from "react-router-dom";
import { DarkLogo } from "../../shared/icons/darklogo";
import useWindowWidth from "../../shared/utils";
import { Compass } from "../../shared/icons/compass";
import { submitRequest } from "../../shared/utils";

const HighlightArea = ({ children }) => (
  <div className="relative w-full h-auto aspect-[4/3]">
    <svg
      className="absolute top-[-100px] lg:top-[-75px] sm:mt-[50px] xs:mt-[50px] left-0 w-full h-full pointer-events-none"
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

  const windowWidth = useWindowWidth();

  const [suka, setSuka] = useState({ width: "107", height: "43" });
  const [abu, setAbu] = useState({})
  const [activeFloorIndex, setActiveFloorIndex] = useState(null);
  const [updatedFloorsImages, setUpdatedFloorsImages] = useState(
    thisFloor.floorsImages
  );

  console.log(abu, 'this is activeFloor')

  const handleFloorActivate = (e, index, floor) => {
    setActiveFloorIndex(index);
    setAbu(floor)
    const updatedImages = updatedFloorsImages.map((img, idx) =>
      idx === index ? { ...img, x: img.x + 10, y: img.y + 10 } : img
    );
    setUpdatedFloorsImages(updatedImages);
    console.log(floor, 'this is fuck')
  };

  useEffect(() => {
    if (windowWidth < 460) {
      setSuka({ width: "80", height: "30" });
    } else if (windowWidth < 768) {
      setSuka({ width: "90", height: "35" });
    } else {
      setSuka({ width: "107", height: "43" });
    }
  }, [windowWidth]);

  return (
    <div className="w-full px-10 sm:px-4 xs:px-2 py-2">
      <div className="w-full flex items-center justify-between mb-2">
        <IoArrowBack
          onClick={() => navigate(-1)}
          size={30}
          className="cursor-pointer"
        />
        <p className="text-[50px] main-font lg:text-[40px] sm:text-[30px] xs:text-[20px] font-[500] noselect xs:hidden">
          Типовой план {id} этажа
        </p>
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <DarkLogo width={suka.width} height={suka.height} />
        </div>
      </div>
      <p className="text-[50px] text-center main-font lg:text-[40px] sm:text-[30px] xs:text-[20px] font-[500] noselect hidden xs:block">
        Типовой план {id} этажа
      </p>
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
                  onMouseEnter={(e) => handleFloorActivate(e, index, floor)}
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
      <div className="mt-[-220px] lg:mt-[-70px] w-full flex justify-end mb-4 xs:scale-90">
        <Compass />
      </div>
      <div className="">
        <Application
          square={thisFloor.squints[String(activeFloorIndex + 1)].square}
          lock={thisFloor.squints[String(activeFloorIndex + 1)].lock}
          name={thisFloor.squints[String(activeFloorIndex + 1)].name}
          obj={thisFloor}
          office={activeFloorIndex}
        />
      </div>
    </div>
  );
};
