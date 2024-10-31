import Plan from "../../shared/images/location/Plan.png";
import Access from "../../shared/images/location/Access.png";
import Ofices from "../../shared/images/location/Ofices.png";
import Permission from "../../shared/images/location/Permission.png";
import Safety from "../../shared/images/location/Safety.png";
import { Footer } from "../../shared";
import { Consultation } from "../../shared/components/consultation";
import SwitchContact from "../../shared/components/switch-contact";

export const Advantage = () => {
  return (
    <>
      <div className="w-full bg-[#000000] pt-[150px] sm:pt-[100px]">
        <div className="w-full flex gap-8 px-8 sm:px-3 sm:gap-4 sm:flex-col">
          <div className="w-full flex flex-col justify-center items-center sm:items-start">
            <div className="flex flex-col justify-center items-center sm:items-start gap-1 sm:gap-2 sm:w-full">
              <p className="text-3xl text-white sm:text-2xl font-[600] main-font">
                Генеральный план{" "}
              </p>
              <div className="w-[70%] sm:w-full h-[2px] bg-white rounded" />
            </div>
            <p className="text-white mt-8 sm:mt-4 max-w-[70%] text-center sm:text-start small-font xs:text-sm">
              Бизнес-центр “PRESTIGE TOWER” расположен в самой топовой локации
              города Бишкек{" "}
            </p>
          </div>
          <div className="w-full h-full">
            <img src={Plan} alt="Prestige Tower Bishkek, бизнес-центр в Бишкеке, аренда офисов Prestige Tower, офисы класса А Бишкек, коммерческая недвижимость Бишкек, современный бизнес-центр Бишкек, офисы в центре города Бишкек, аренда офисов в Бишкеке, офисные помещения Prestige Tower, бизнес-центр с парковкой Бишкек, аренда офиса рядом с Technodom Бишкек, офисы рядом с Дордой Плаза Бишкек, бизнес-центр с новейшими технологиями, офисы в современном здании Бишкек, Prestige Tower аренда помещений" className="w-full h-auto rounded-3xl" />
          </div>
        </div>
        <div className="w-full flex gap-8 sm:px-3 sm:gap-4 px-8 items-center mt-8 sm:flex-col-reverse">
          <div className="w-full h-full">
            <img src={Access} alt="Prestige Tower Bishkek, бизнес-центр в Бишкеке, аренда офисов Prestige Tower, офисы класса А Бишкек, коммерческая недвижимость Бишкек, современный бизнес-центр Бишкек, офисы в центре города Бишкек, аренда офисов в Бишкеке, офисные помещения Prestige Tower, бизнес-центр с парковкой Бишкек, аренда офиса рядом с Technodom Бишкек, офисы рядом с Дордой Плаза Бишкек, бизнес-центр с новейшими технологиями, офисы в современном здании Бишкек, Prestige Tower аренда помещений" className="w-full h-auto rounded-3xl" />
          </div>
          <div className="w-full flex flex-col justify-center items-center sm:items-start gap-4 sm:gap-1">
            <div className="flex flex-col justify-center items-center xs:items-start gap-1 sm:w-full">
              <p className="text-3xl text-white sm:text-center sm:text-2xl font-[600] main-font">
                В шаговой доступности:
              </p>
              <div className="w-[70%] sm:w-full h-[2px] bg-white rounded" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro] small-font font-[300] xs:text-sm">
                5 м <span className="text-white">1000 мелочей</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro] small-font font-[300] xs:text-sm">
                20 м <span className="text-white">Technodom.kg</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro] small-font font-[300] xs:text-sm">
                50 м <span className="text-white">Образовательные центры</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro] small-font font-[300] xs:text-sm">
                70 м <span className="text-white">Магазины</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro] small-font font-[300] xs:text-sm">
                170 м <span className="text-white">Кыргыз почтасы</span>
              </p>
            </div>
            <div className="flex flex-col gap-1 small-font font-[300] xs:text-sm">
              <p className="text-[gainsboro]">
                230 м <span className="text-white">Детский мир</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro] small-font font-[300] xs:text-sm">
                260 м <span className="text-white">Дордой плаза</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro] small-font font-[300] xs:text-sm">
                440 м <span className="text-white">Спорт - клуб "Karven"</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro] small-font font-[300] xs:text-sm">
                630 м <span className="text-white">Гум</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro] small-font font-[300] xs:text-sm">
                680 м <span className="text-white">Цум Айчурок</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro] small-font font-[300] xs:text-sm">
                680 м <span className="text-white">Центральная мечеть</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-8 sm:gap-4 sm:px-3 px-8 items-start mt-8 sm:mt-4 sm:flex-col">
          <div className="w-full flex flex-col justify-center items-center sm:items-start">
            <div className="flex flex-col justify-center items-center gap-1 sm:w-full sm:items-start">
              <p className="text-3xl text-white sm:text-2xl font-[600] main-font">
                Офисы под ключ
              </p>
              <div className="w-[70%] sm:w-full h-[2px] bg-white rounded" />
            </div>
            <p className="text-white mt-12 sm:mt-4 xs:mt-2 sm:text-start max-w-[70%] text-center small-font font-[300] xs:text-sm">
              Офис под ключ позволяет сократить время и усилия связаные с
              ремонтом, а также, обеспечить высокое качество выполненных работ.
            </p>
            <p className="text-white mt-12 sm:mt-4 xs:mt-2 sm:text-start max-w-[70%] text-center small-font font-[300] xs:text-sm">
              Откройте двери в ваше новое рабочее пространство! Офисы “PRESTIGE TOWER” - это не просто место для работы, а уютные уголки для
              вдохновения.
            </p>
            <p className="text-white mt-12 sm:mt-4 xs:mt-2 sm:text-start max-w-[70%] text-center small-font font-[300] xs:text-sm">
              Здесь вы найдете все для комфортной работы!
            </p>
          </div>
          <div className="w-full h-full">
            <img src={Ofices} alt="Prestige Tower Bishkek, бизнес-центр в Бишкеке, аренда офисов Prestige Tower, офисы класса А Бишкек, коммерческая недвижимость Бишкек, современный бизнес-центр Бишкек, офисы в центре города Бишкек, аренда офисов в Бишкеке, офисные помещения Prestige Tower, бизнес-центр с парковкой Бишкек, аренда офиса рядом с Technodom Бишкек, офисы рядом с Дордой Плаза Бишкек, бизнес-центр с новейшими технологиями, офисы в современном здании Бишкек, Prestige Tower аренда помещений" className="w-full max-h-[500px] object-cover rounded-3xl" />
          </div>
        </div>
        <div className="w-full flex gap-8 px-8 sm:px-3 sm:gap-4 items-start mt-8 sm:mt-4 sm:flex-col-reverse sm:items-start">
          <div className="w-full h-full">
            <img src={Permission} alt="Prestige Tower Bishkek, бизнес-центр в Бишкеке, аренда офисов Prestige Tower, офисы класса А Бишкек, коммерческая недвижимость Бишкек, современный бизнес-центр Бишкек, офисы в центре города Бишкек, аренда офисов в Бишкеке, офисные помещения Prestige Tower, бизнес-центр с парковкой Бишкек, аренда офиса рядом с Technodom Бишкек, офисы рядом с Дордой Плаза Бишкек, бизнес-центр с новейшими технологиями, офисы в современном здании Бишкек, Prestige Tower аренда помещений" className="w-full h-auto object-cover rounded-3xl" />
          </div>
          <div className="w-full flex flex-col justify-center items-center sm:items-start">
            <div className="flex flex-col justify-center items-center gap-1 sm:w-full sm:items-start">
              <p className="text-3xl text-white sm:text-2xl font-[600] main-font">
                Доступ 24/7
              </p>
              <div className="w-[70%] sm:w-full h-[2px] bg-white rounded" />
            </div>
            <p className="text-white mt-12 max-w-[70%] sm:max-w-full text-center sm:text-start sm:mt-4 small-font font-[300] xs:text-sm">
              Круглосуточный доступ в бизнес-центр «PRESTIGE TOWER» - может
              способствовать росту вашего бизнеса, поскольку он позволяет вам
              быть контактным и доступным для клиентов в любое время.
            </p>
          </div>
        </div>
        <div className="w-full flex gap-8 sm:gap-4 sm:px-3 px-8 items-start mt-8 pb-8 sm:mt-4 sm:flex-col">
          <div className="w-full flex flex-col justify-center items-center sm:w-full sm:items-start">
            <div className="flex flex-col justify-center items-center gap-1 sm:items-start sm:w-full">
              <p className="text-3xl text-white sm:text-2xl font-[600] main-font">
                Безопасность
              </p>
              <div className="w-[70%] sm:w-full h-[2px] bg-white rounded" />
            </div>
            <p className="text-white mt-12 max-w-[70%] sm:max-w-full text-center sm:text-start sm:mt-4 small-font font-[300] xs:text-sm">
              Видеонаблюдение по всему Бизнес центру, охрана 24/7 ресепшен-зона,
              чипированные карты, пожарная безопасность, эвакуационные выходы
            </p>
          </div>
          <div className="w-full h-full">
            <img src={Safety} alt="Prestige Tower Bishkek, бизнес-центр в Бишкеке, аренда офисов Prestige Tower, офисы класса А Бишкек, коммерческая недвижимость Бишкек, современный бизнес-центр Бишкек, офисы в центре города Бишкек, аренда офисов в Бишкеке, офисные помещения Prestige Tower, бизнес-центр с парковкой Бишкек, аренда офиса рядом с Technodom Бишкек, офисы рядом с Дордой Плаза Бишкек, бизнес-центр с новейшими технологиями, офисы в современном здании Бишкек, Prestige Tower аренда помещений" className="w-full max-h-[500px] object-cover rounded-3xl" />
          </div>
        </div>
        <div className="px-24 pb-10 lg:px-14 sm:px-4 xs:px-2">
          <Consultation />
        </div>
      </div>
      <Footer />
      <SwitchContact />
    </>
  );
};
