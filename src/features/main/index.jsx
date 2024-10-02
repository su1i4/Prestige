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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Main = () => {
  return (
    <div class="background-section">
      <div className="nutral">
        <div className="info-wrap">
          <h1>Prestige tower</h1>
          <p>Современный бизнес центр для вашего комфорта </p>
        </div>
        <div className="buttons">
          <button>Продажа</button>
          <button>Аренда</button>
        </div>
      </div>
      <div className="about">
        <div className="inner">
          <h2>Об объекте</h2>
          <div className="list">
            <div className="icons">
              <div className="wrapp">
                <Geo />
                Територия: 21 сотка
              </div>
              <div className="wrapp">
                <Ruler />
                Плошадь: от 30.07 м2 до 625.27 м2
              </div>
              <div className="wrapp">
                <Arrow />
                Высота потолков: от 3 до 6м.
              </div>
              <div className="wrapp">
                <Apartment />
                Этажность: 13 этажей
              </div>
              <div style={{ marginTop: "50px" }} className="wrapp">
                <File />
                Красная книга
              </div>
              <div className="wrapp">
                <Next />
                Начало строительства : 3 кв. 2023 г
              </div>
              <div className="wrapp">
                <Mark />
                завершение строительства : 4 кв. 2026 г
              </div>
              <div style={{ marginTop: "50px" }} className="wrapp">
                <Vector />
                офисы под ключ
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
          </div>
        </div>
      </div>
      <div className="swipers">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          style={{width: '100%', margin: '100px', borderRadius: '20px'}}
        >
          <SwiperSlide>
            <div className="slide-content">
              <h2>Холл</h2>
              <p>
                Репутация и значимость любого Бизнес-Центра начинается со входа,
                ведь именно он создает первое впечатление
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <h2>Slide 2</h2>
              <p>Content for slide 2</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <h2>Slide 3</h2>
              <p>Content for slide 3</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <h2>Slide 4</h2>
              <p>Content for slide 4</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
