import { useState, useRef, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { floors } from "../../lib/copy";
import Hard from "../../shared/images/selling/Монтажная область 1 (2).png";
import "./main.css";
import { Geo } from "../../shared/icons/geo";
import { Arrow } from "../../shared/icons/Arrow";
import { Apartment } from "../../shared/icons/apartment";
import { Dumbbell } from "../../shared/icons/dumbbell";
import { Coffee } from "../../shared/icons/Coffe";
import { File } from "../../shared/icons/File";
import { Mic } from "../../shared/icons/Mic";
import { Mark } from "../../shared/icons/Mark";
import { Restaraunt } from "../../shared/icons/Restaraunt";
import { Vector } from "../../shared/icons/Vector";
import { Ruler } from "../../shared/icons/ruler";
import { Next } from "../../shared/icons/Next";
import Smamage from "../../shared/images/Smamage.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwitchContact from "../../shared/components/switch-contact";
import { ReactComponent as Mapik } from "../../shared/icons/Landing page/карта.svg";
import Imagik from "../../shared/icons/Landing page/image.png";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Summer from "../../shared/images/seasons/summer.png";
import { Footer } from "../../shared/components/footer";
import YandexMap from "../../shared/components/map";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Consultation } from "../../shared/components/consultation";
import useWindowWidth from "../../shared/utils";

const Container = ({ children }) => (
  <div className="relative inline-block w-full bg-black">{children}</div>
);

const Image = ({ src, alt }) => (
  <img src={src} alt={alt} className="block w-full h-[130vh] sm:h-full" />
);

const HighlightArea = ({ children }) => (
  <svg
    className="absolute top-0 left-0 w-full h-full pointer-events-none"
    viewBox="0 0 800 600"
  >
    {children}
  </svg>
);

const HighlightPath = ({ d, isActive, onMouseEnter, onClick }) => (
  <path
    d={d}
    className={`${
      isActive ? "fill-[#2756FC66]" : "fill-transparent"
    } cursor-pointer pointer-events-auto`}
    onMouseEnter={onMouseEnter}
    onClick={onClick}
  />
);

const Popover = ({ children, position }) => (
  <div
    className="absolute bg-white rounded-md border border-gray-300 p-2.5 shadow-lg z-10 transform -translate-x-1/2 -translate-y-full"
    style={{ top: `${position.y}px`, left: `${position.x}px` }}
  >
    {children}
  </div>
);

export const Main = () => {
  const navigate = useNavigate();
  const [activeFloorIndex, setActiveFloorIndex] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  const [firstClick, setFirstClick] = useState(false);
  const [isPopoverFrozen, setIsPopoverFrozen] = useState(false);
  const containerRef = useRef(null);
  const [offset, setOffset] = useState();
  const [suka, setSuka] = useState(150);

  const windowWidth = useWindowWidth();

  const handleFloorActivate = (event, index) => {
    if (!firstClick) {
      setActiveFloorIndex(index);
      setPopoverPosition({ x: event.clientX, y: event.clientY - suka });
    }
  };

  const handleClickOutside = (event) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target) &&
      !isPopoverFrozen
    ) {
      setActiveFloorIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopoverFrozen]);

  const handlePopoverClick = (index) => {
    if (!firstClick) {
      setFirstClick(true)
      setIsPopoverFrozen(true)

      setTimeout(() => {
        setIsPopoverFrozen(false)
        setFirstClick(false); 
      }, 2500);
    } else {
      navigate(`/rent/floors/${floors[index].floor}`);
    }
  };

  const swiperRef = useRef();

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    if (windowWidth < 400) {
      setSuka(300);
    } else if (windowWidth < 460) {
      setSuka(300);
    } else if (windowWidth < 600) {
      setSuka(50);
    } else if (windowWidth < 800) {
      setSuka(0);
    } else if (windowWidth < 1000) {
      setSuka(-300);
    } else {
      setSuka(-250);
    }
  }, [windowWidth]);

  return (
    <>
      <div class="background-section">
        <img src={Imagik} className="w-full absolute min-h-[200vh]" />
        <div className="absolute top-0 left-0 right-0 h-[400vh] bg-black/80"></div>
        <div className="w-full z-[9999] absolute">
          <div className="nutral">
            <div className="info-wrap">
              <h1 className="main-font font-[600]">PRESTIGE TOWER</h1>
              <p className="small-font max-w-[70%] sm:max-w-full xs:text-sm">
                Это современный бизнес-центр класса «А», спроектированный по
                новейшим технологиям мирового стандарта{" "}
              </p>
            </div>
            <div className="buttons small-font">
              <button onClick={() => navigate("rent")}>Продажа</button>
              <button onClick={() => navigate("rent")}>Аренда</button>
            </div>
          </div>
          <div id="sulaiman" className="about">
            <div className="inner">
              <h2 className="main-font xs:py-2">Об объекте</h2>
              <div className="list xs:mt-2">
                <div className="icons small-font w-[55%] xs:w-full">
                  <div className="wrapp">
                    <File />
                    Красная книга
                  </div>
                  <div className="wrapp">
                    <Geo />
                    Территория:<span className="bold">21 сотка</span>
                  </div>
                  <div className="wrapp">
                    <Ruler />
                    Площадь:{" "}
                    <span className="bold">от 30.07 м2 до 625.27 м2</span>
                  </div>
                  <div className="wrapp">
                    <Arrow />
                    Высота потолков: <span className="bold">от 3 до 6м.</span>
                  </div>
                  <div className="wrapp">
                    <Apartment />
                    Этажность: <span className="bold">13 этажей</span>
                  </div>
                  <div id="lox" className="wrapp">
                    <Vector />
                    Офисы под ключ
                  </div>
                  <div className="wrapp">
                    <Coffee />
                    Кофейня на 1 этаже
                  </div>
                  <div className="wrapp">
                    <Mic />
                    Конференц зал
                  </div>
                  <div className="wrapp">
                    <Dumbbell />
                    Спортивный зал
                  </div>
                  <div className="wrapp">
                    <Restaraunt />
                    Ресторан на 13 этаже
                  </div>
                </div>
                <img
                  src={Smamage}
                  alt="Prestige Tower здание в"
                  className="max-h-[500px] xs:max-h-[210px] kuku w-full"
                />
              </div>
            </div>
          </div>
          <div className="swipers">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              ref={swiperRef}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              style={{ width: "100%", borderRadius: "20px" }}
            >
              <SwiperSlide>
                <div id="one" className="slide-content small-font">
                  <div className="absolute left-4 bottom-10 right-6 border-l-[3px] border-solid border-white p-4 bg-black/20">
                    <h2 className="text-white text-[50px] main-font font-[600] tracking-wider sm:text-[40px] xs:text-[23px] ">
                      Холл
                    </h2>
                    <p className="text-white text-xl small-font sm:text-lg xs:text-xs ">
                      Репутация и значимость любого Бизнес-Центра начинается со
                      входа, ведь именно он создает первое впечатление
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="five" className="slide-content small-font">
                  <div className="absolute left-4 bottom-10 right-6 border-l-[3px] border-solid border-white p-4 bg-black/20 sm:left-3  xs:left-1 xs:p-1">
                    <h2 className="text-white text-[50px] main-font font-[600] tracking-wider sm:text-[40px] xs:text-[23px] ">
                      Офисы под ключ
                    </h2>
                    <p className="text-white text-xl small-font sm:text-lg xs:text-xs ">
                      Офис под ключ позволяет сократить время и усилия
                      связанные с ремонтом, а также, обеспечить высокое качество
                      выполненных работ.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="four" className="slide-content small-font">
                  <div className="absolute left-4 bottom-10 right-6 border-l-[3px] border-solid border-white p-4 bg-black/20 sm:left-3 xs:left-1 xs:p-1">
                    <h2 className="text-white text-[50px] main-font font-[600] tracking-wider sm:text-[40px] xs:text-[23px] ">
                      Конференц-залы
                    </h2>
                    <p className="text-white text-xl small-font sm:text-lg xs:text-xs ">
                      Идеальное место для проведения вашего делового мероприятия
                      - зал конференций в БЦ “PRESTIGE TOWER”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="three" className="slide-content small-font">
                  <div className="absolute left-4 bottom-10 right-6 border-l-[3px] border-solid border-white p-4 bg-black/20 sm:left-3  xs:left-1 xs:p-1">
                    <h2 className="text-white text-[50px] main-font font-[600] tracking-wider sm:text-[40px] xs:text-[23px] ">
                      Намазкана
                    </h2>
                    <p className="text-white text-xl small-font sm:text-lg xs:text-xs ">
                      Для вашего удобства, на -1 этаже Бизнес-центра “PRESTIGE
                      TOWER” будет расположена мужская и женская Намазкана
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="two" className="slide-content small-font">
                  <div className="absolute left-4 bottom-10 sm:left-3 xs:left-1 xs:p-1 right-6 border-l-[3px] border-solid border-white p-4 bg-black/20">
                    <h2 className="text-white text-[50px] main-font font-[600] tracking-wider sm:text-[40px] xs:text-[23px] ">
                      Ресторан
                    </h2>
                    <p className="text-white text-xl small-font sm:text-lg xs:text-xs ">
                      В Бизнес-центре “PRESTIGE TOWER” на 13 этаже будет
                      расположен ресторан высокой кухни в современном стиле{" "}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="six" className="slide-content small-font">
                  <div className="absolute left-4 bottom-10 right-6 border-l-[3px] border-solid border-white p-4 bg-black/20 sm:left-3 xs:left-1 xs:p-1">
                    <h2 className="text-white text-[50px] main-font font-[600] tracking-wider sm:text-[40px] xs:text-[23px] ">
                      Паркинг
                    </h2>
                    <p className="text-white text-xl small-font sm:text-lg xs:text-xs ">
                      Для удобства автовладельцев предусмотрен удобный,
                      двухуровневый, подземный паркинг на 61 машин
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="absolute bg-black bottom-0 left-0 right-0 w-full h-[560px] lg:h-[400px] sm:h-[300px] "></div>
            <div className="sm:hidden absolute top-0 bottom-0 left-10 flex items-center">
              <GrPrevious
                onClick={goPrev}
                size={38}
                className="text-white active:scale-105 active:translate-x-[-10px] transition-all duration-200 "
              />
            </div>
            <div className="sm:hidden absolute top-0 bottom-0 right-10 flex items-center">
              <GrNext
                onClick={goNext}
                size={38}
                className="text-white active:scale-105 active:translate-x-[10px] transition-all duration-200 "
              />
            </div>
          </div>
          <div className="w-full justify-center lg:justify-start px-24 lg:px-14 sm:px-6 xs:px-2 flex flex-col gap-4 bg-black">
            <p className="main-font font-[600] text-[50px] lg:text-[40px] sm:text-[30px] xs:text-[23px] text-white noselect">
              Видеообзор
            </p>
            <iframe
              src="https://www.youtube.com/embed/atjyAEKoeQI"
              className="w-full h-[600px] lg:h-[500px] sm:h-[400px] xs:h-[350px]"
            ></iframe>
          </div>
          <div className="p-4 xs:p-2 bg-black">
            <div className="w-full flex sm:flex-col bg-[#151515] rounded-[20px] ">
              <div className="w-[45%] p-8 sm:p-4 xs:p-2 sm:w-full">
                <div className="flex justify-end  ">
                  <p className="w-[70%] text-[50px] font-[600] sm:text-2xl main-font xs:text-[23px] text-white text-start sm:text-start">
                    Преимущества
                  </p>
                </div>
                <div className="flex justify-end sm:justify-start">
                  <p className="text-lg text-start sm:text-start text-white font-[300] mt-8 sm:mt-4 w-[70%] sm:w-full sm:leading-normal sm:text-md xs:text-sm leading-10 tracking-wider small-font">
                    Мы сделали акцент на современности и минимализме, чтобы
                    создать комфортную атмосферу в бурлящей деловой жизни{" "}
                  </p>
                </div>
                <div className="w-full flex justify-end mt-4">
                  <button
                    onClick={() => navigate("/location-andvantages")}
                    className="bg-[#848484] rounded-[15px] px-3 py-2 text-white small-font text-xl sm:text-lg xs:text-sm font-[500]"
                  >
                    Подробнее
                  </button>
                </div>
              </div>
              <div className="w-[55%] sm:w-full">
                <img
                  src={Summer}
                  alt="Prestige Tower в зимнее время"
                  className="w-full rounded-[20px]"
                />
              </div>
            </div>
          </div>
          <p className="main-font font-[600] text-[50px] lg:text-[40px] sm:text-[30px] xs:text-[23px] text-white pl-24 lg:pl-16 sm:pl-8 xs:pl-2 py-4 xs:py-2 bg-black">
            Планировки
          </p>
          <Container ref={containerRef}>
            <Image src={Hard} alt="Building" />
            <HighlightArea>
              {floors.map((floor, index) => (
                <React.Fragment key={index}>
                  <HighlightPath
                    d={floor.rigth.path}
                    isActive={activeFloorIndex === index}
                    onMouseEnter={(e) => handleFloorActivate(e, index)}
                    onClick={(e) => handlePopoverClick(index)}
                  />
                  <HighlightPath
                    d={floor.left.path}
                    isActive={activeFloorIndex === index}
                    onMouseEnter={(e) => handleFloorActivate(e, index)}
                    onClick={(e) => handlePopoverClick(index)}
                  />
                </React.Fragment>
              ))}
            </HighlightArea>
            {activeFloorIndex !== null && (
              <Popover position={popoverPosition}>
                <div className="w-[270px] sm:w-[200px] flex flex-col justify-center items-center gap-4">
                  <div className="w-full flex flex-col justify-center items-center">
                    <p className="text-black text-[23px] font-semibold small-font">
                      {floors[activeFloorIndex].floor} этаж
                    </p>
                    <div className="w-[50px] h-[3px] bg-black" />
                  </div>
                  <p className="text-[#000000B2] text-sm font-medium small-font">
                    {floors[activeFloorIndex].count} свободных помещений на
                    аренду
                  </p>
                  <button
                    onClick={() =>
                      navigate(`/rent/floors/${floors[activeFloorIndex].floor}`)
                    }
                    className="bg-[#848484] rounded-[15px] font-medium text-sm px-4 py-2 text-white small-font"
                  >
                    Перейти
                  </button>
                </div>
              </Popover>
            )}
          </Container>
          <div className="text-white pl-10 lg:pl-7 sm:pl-4 xs:pl-2 flex flex-col gap-4 xs:gap-2 py-2 bg-black sm:mt-[-10px]">
            <p className="text-[50px] sm:text-[40px] xs:text-[23px] font-[600] main-font text">
              Местоположение{" "}
            </p>
            <p className="text-xl lg:text-lg sm:text-md xs:text-xs">
              Бизнес-центр “PRESTIGE TOWER” расположен в самой топовой локации
              города Бишкек{" "}
            </p>
          </div>
          <div className="bg-black h-[70vh] overflow-hidden">
            <YandexMap />
          </div>
          <div className="p-4 xs:p-2 bg-black">
            <Consultation />
          </div>
          <Footer />
        </div>
      </div>
      <SwitchContact />
    </>
  );
};
