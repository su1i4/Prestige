import React, { useEffect } from "react";
import Marker from '../../icons/Marker.svg'

const YandexMap = () => {
  useEffect(() => {
    // Load the Yandex Maps script dynamically
    const yandexScript = document.createElement("script");
    yandexScript.src =
      "https://api-maps.yandex.ru/2.1/?apikey=ef84f2a7-333d-4b33-b3d5-5263cb19fb71&lang=ru_RU";
    yandexScript.type = "text/javascript";
    yandexScript.onload = () => {
      window.ymaps.ready(init);
    };
    document.body.appendChild(yandexScript);

    // Initialize the map when the script is loaded
    const init = () => {
      var myMap = new window.ymaps.Map("yandex-map", {
        center: [42.875652, 74.622943], // Coordinates for Prestige Tower or your desired location
        zoom: 16,
        controls: [],
      });

      var myPlacemark = new window.ymaps.Placemark(
        [42.875652, 74.622943],
        {
          hintContent: "Prestige Tower",
          balloonContent: "бизнес-центр Prestige Tower",
        },
        {
          iconLayout: "default#image",
          iconImageHref: Marker, // Replace with your custom icon
          iconImageSize: [100, 100], // Adjust size as needed
          iconImageOffset: [-50, -100], // Offset to center the icon properly
        }
      );

      // Add the custom placemark to the map
      myMap.geoObjects.add(myPlacemark);
    };

    return () => {
      // Cleanup the script if the component unmounts
      document.body.removeChild(yandexScript);
    };
  }, []);

  return (
    <div className="w-full h-[700px] sm:h-[600px] xs:h-[450px] relative">
      <div
        id="yandex-map"
        style={{
          width: "100%",
          height: "100%",
          filter: "grayscale(1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          mixBlendMode: "difference",
          pointerEvents: "none",
        }}
      />
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <div id="yandex-map" style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
};

export default YandexMap;
