import React, { useState } from "react";
import styled from "styled-components";
import Hard from "../../shared/images/selling/hard.png";
import { floors } from "../../lib/data";

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const HighlightArea = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const HighlightPath = styled.path`
  fill: ${({ isHovered }) => (isHovered ? "#2756FC66" : "rgba(0, 0, 0, 0.0)")};
  cursor: pointer;
  pointer-events: all;
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
  const [hoveredFloorIndex, setHoveredFloorIndex] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (event, index) => {
    setHoveredFloorIndex(index);
    setPopoverPosition({
      x: event.clientX,
      y: event.clientY - 20,
    });
  };

  const handleMouseLeave = () => {
    setHoveredFloorIndex(null);
  };

  return (
    <Container>
      <Image src={Hard} alt="Building" />
      <HighlightArea viewBox="0 0 800 600">
        {floors.map((floor, index) => (
          <React.Fragment key={index}>
            <HighlightPath
              d={floor.rigth.path}
              isHovered={hoveredFloorIndex === index}
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              onMouseLeave={handleMouseLeave}
            />
            <HighlightPath
              d={floor.left.path}
              isHovered={hoveredFloorIndex === index}
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              onMouseLeave={handleMouseLeave}
            />
          </React.Fragment>
        ))}
      </HighlightArea>
      {hoveredFloorIndex !== null && (
        <Popover
          style={{
            top: `${popoverPosition.y}px`,
            left: `${popoverPosition.x}px`,
          }}
        >
          {floors[hoveredFloorIndex].label}
        </Popover>
      )}
    </Container>
  );
};
