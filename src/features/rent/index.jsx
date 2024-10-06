import "./rent.css";
import Main from "../../shared/images/selling/main.png";
import Hard from "../../shared/images/selling/hard.png";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Image = styled.img`
  display: block;
  width: 100%;
//   max-height: 90vh;
`;

const HighlightArea = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const HighlightPolygon = styled.polygon`
  fill: rgba(0, 0, 255, 0.3);
  cursor: pointer;
  pointer-events: all;

  &:hover {
    fill: rgba(0, 0, 255, 0.6);
  }
`;

const Popover = styled.div`
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transform: translate(-50%, -100%);
  pointer-events: none;
`;

export const Rent = () => {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (event, area) => {
    setHoveredArea(area);
    setPopoverPosition({
      x: event.clientX,
      y: event.clientY - 20,
    });
  };

  const handleMouseLeave = () => {
    setHoveredArea(null);
  };
  return (
    <div className="Rent w-full h-auto">
      <div className="w-full h-[100vh] relative">
        <img src={Main} className="darkened-image" />
        <div className="absolute bottom-10 right-8 left-8 border-l-[2px] border-white border-solid pl-8 p-4 bg-black/30 ">
          <p className="text-[50px] text-white">Аренда и продажа офисов</p>
          <p className="text-lg text-white">
            Современный бизнес центр для вашего комфорта
          </p>
          <div className="w-full flex justify-end">
            <button className="text-xl text-white bg-[#848484] rounded-[15px] px-4 py-2">
              Контакты
            </button>
          </div>
        </div>
      </div>
      <Container>
        <Image src={Hard} alt="Building" />
        <HighlightArea>
          <HighlightPolygon
            points="100,150 200,100 300,150 200,200"
            onMouseEnter={(e) => handleMouseEnter(e, "Этаж 1")}
            onMouseLeave={handleMouseLeave}
          />
          <HighlightPolygon
            points="100,300 200,250 300,300 200,350"
            onMouseEnter={(e) => handleMouseEnter(e, "Этаж 2")}
            onMouseLeave={handleMouseLeave}
          />
        </HighlightArea>
        {hoveredArea && (
          <Popover
            style={{
              top: `${popoverPosition.y}px`,
              left: `${popoverPosition.x}px`,
            }}
          >
            {hoveredArea}
          </Popover>
        )}
      </Container>
    </div>
  );
};
