import { ReactComponent as Logo } from "../../icons/Логотип.svg";
import { ReactComponent as Geo } from "../../icons/Geo.svg";

import { FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useScrollToSection } from "../../utils";

export const Footer = () => {
  const { activeSection, scrollToSection } = useScrollToSection();
  return (
    <div
      id="footer"
      className="bg-[#151515] flex flex-wrap xs:flex-col xs:gap-6 justify-between p-8 sm:p-6"
    >
      <div className="flex justify-center items-center sm:justify-start">
        <Logo />
      </div>
      <div className="flex flex-col gap-4 text-white underline main-font font-[500]">
        <a href="/rent">Продажа и Аренда</a>
        <p onClick={() => scrollToSection("sulaiman")}>О нас</p>
        <a href="/location-andvantages">Преимущества</a>
        <a>Контакты</a>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center text-white">
          <FaPhoneAlt size={20} className="pl-[2px]" />
          <a href="tel:+996995090090" className="text-white underline pl-[2px] main-font font-[500]">
            0995 090 090
          </a>
        </div>
        <div className="flex gap-4 items-center text-white">
          <RiInstagramFill size={24} />
          <a
            href="https://www.instagram.com/PRESTIGE.TOWER/"
            className="text-white underline main-font font-[500]"
          >
            PRESTIGE.TOWER
          </a>
        </div>
        <div className="flex gap-4 items-center text-white">
          <MdEmail size={24} />
          <a className="main-font font-[500]" href="mailto:prestige.tower.kg@gmail.com">
            prestige.tower.kg@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:mt-4">
        <a
          href="https://2gis.kg/bishkek/branches/70000001044926757/firm/70000001044926758/74.596991%2C42.872611?m=74.596991%2C42.872611%2F13.67" // replace with the correct 2GIS link for this location
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 no-underline cursor-pointer"
        >
          <Geo />
          <div className="text-white">
            <p className="text-md border-b-[1px] border-white border-solid main-font font-[500]">
              Отдел продаж
            </p>
            <p className="text-xs small-font">
              ул. Токтогула 125/1 Tower B, 5 этаж, офис 503
            </p>
          </div>
        </a>

        <a
          href="https://2gis.kg/bishkek/search/престиж%20товер/firm/70000001081321095/tab/reviews?m=74.624323%2C42.874996%2F14.26" // replace with the correct 2GIS link for your location
          target="_blank" // opens the link in a new tab
          rel="noopener noreferrer" // for security, especially if you use target="_blank"
          className="flex items-center gap-4 no-underline cursor-pointer"
        >
          <Geo />
          <div className="text-white">
            <p className="text-md border-b-[1px] border-white border-solid main-font font-[500]">
              Адрес бизнес центра
            </p>
            <p className="text-xs small-font">ул. Чуй 127/1</p>
          </div>
        </a>
      </div>
    </div>
  );
};
