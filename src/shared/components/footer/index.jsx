import { ReactComponent as Logo } from "../../icons/Logo.svg";
import { ReactComponent as Geo } from "../../icons/Geo.svg";

import { FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="bg-[#151515] flex justify-between p-8">
      <div className="flex justify-center items-center">
        <Logo />
      </div>
      <div className="flex flex-col gap-4 text-white underline">
        <a>Продажа и Аренда</a>
        <a>О нас</a>
        <a>Местоположение</a>
        <a>Контакты</a>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center text-white">
          <FaPhoneAlt size={20} className="pl-[2px]" />
          <p className="text-white pl-[2px]">0995 090 090</p>
        </div>
        <div className="flex gap-4 items-center text-white">
          <RiInstagramFill size={24} />
          <p className="text-white">PRESTIGE.TOWER</p>
        </div>
        <div className="flex gap-4 items-center text-white">
          <MdEmail size={24} />
          <p className="text-white">PRESTIGE.TOWER.KG@GMAIL.COM</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Geo />
          <div className="text-white">
            <p className="text-md border-b-[1px] border-white border-solid">
              Отдел продаж
            </p>
            <p className="text-xs">
              ул. Токтогула 125/1 Tower B, 5 этаж, офис 503
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Geo />
          <div className="text-white">
            <p className="text-md border-b-[1px] border-white border-solid">
              Адрес Бизнес центра
            </p>
            <p className="text-xs">ул. Чуй 127/1</p>
          </div>
        </div>
      </div>
    </div>
  );
};
