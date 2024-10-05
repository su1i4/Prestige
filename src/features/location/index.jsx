import Plan from "../../shared/images/location/Plan.png";
import Access from "../../shared/images/location/Access.png";
import Ofices from "../../shared/images/location/Ofices.png";
import Permission from "../../shared/images/location/Permission.png";
import Safety from "../../shared/images/location/Safety.png";
import { Footer } from "../../shared";
import { Consultation } from "../../shared/components/consultation";

export const Advantage = () => {
  return (
    <>
      <div className="w-full bg-[#000000] pt-[150px]">
        <div className="w-full flex gap-8 px-8">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-1">
              <p className="text-3xl text-white">Генеральный план </p>
              <div className="w-[70%] h-[2px] bg-white rounded" />
            </div>
            <p className="text-white mt-8 max-w-[70%] text-center">
              Бизнес-центр “Prestige-tower” расположен в самой топовой локации
              города бишкек{" "}
            </p>
          </div>
          <div className="w-full h-full">
            <img src={Plan} className="w-full h-auto" />
          </div>
        </div>
        <div className="w-full flex gap-8 px-8 items-center mt-8">
          <div className="w-full h-full">
            <img src={Access} className="w-full h-auto" />
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center gap-1">
              <p className="text-3xl text-white">В шаговой доступности:</p>
              <div className="w-[70%] h-[2px] bg-white rounded" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro]">
                5 м <span className="text-white">1000 мелочей</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro]">
                20 м <span className="text-white">Technodom.kg</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro]">
                50 м <span className="text-white">Образовательные центры</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro]">
                70 м <span className="text-white">Магазины</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro]">
                170 м <span className="text-white">Кыргыз почтасы</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro]">
                230 м <span className="text-white">Детский мир</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro]">
                260 м <span className="text-white">Дордой плаза</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro]">
                440 м <span className="text-white">Спорт - клуб "Karven"</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro]">
                630 м <span className="text-white">Гум</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro]">
                680 м <span className="text-white">Цум Айчурок</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[gainsboro]">
                680 м <span className="text-white">Центральная мечеть</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-8 px-8 items-start mt-8">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-1">
              <p className="text-3xl text-white">Офисы под ключ</p>
              <div className="w-[70%] h-[2px] bg-white rounded" />
            </div>
            <p className="text-white mt-12 max-w-[70%] text-center">
              Офис под ключ позволяет сократить время и усилия связаные с
              ремонтом, а также, обеспечить высокое качество выполненных работ.
            </p>
            <p className="text-white mt-12 max-w-[70%] text-center">
              Откройте двери в ваше новое рабочее пространство! Офисы “Prestige
              Tower” - это не просто место для работы, а уютные уголки для
              вдохновения.
            </p>
            <p className="text-white mt-12 max-w-[70%] text-center">
              Здесь вы найдете все для комфортной работы!
            </p>
          </div>
          <div className="w-full h-full">
            <img src={Ofices} className="w-full max-h-[500px] object-cover" />
          </div>
        </div>
        <div className="w-full flex gap-8 px-8 items-start mt-8">
          <div className="w-full h-full">
            <img src={Permission} className="w-full h-auto object-cover" />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-1">
              <p className="text-3xl text-white">Доступ 24/7</p>
              <div className="w-[70%] h-[2px] bg-white rounded" />
            </div>
            <p className="text-white mt-12 max-w-[70%] text-center">
              Круглосуточный доступ в бизнес-центр «Prestige Tower» - может
              способствовать росту вашего бизнеса, поскольку он позволяет вам
              быть контактным и доступным для клиентов в любое время.
            </p>
          </div>
        </div>
        <div className="w-full flex gap-8 px-8 items-start mt-8 pb-8">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-1">
              <p className="text-3xl text-white">Безопасность</p>
              <div className="w-[70%] h-[2px] bg-white rounded" />
            </div>
            <p className="text-white mt-12 max-w-[70%] text-center">
              Видеонаблюдение по всему БЦ Охрана 24/7 Ресепшен-зона Чипированные
              карты Пожарная безопасность Эвакуационные выходы
            </p>
          </div>
          <div className="w-full h-full">
            <img src={Safety} className="w-full max-h-[500px] object-cover" />
          </div>
        </div>
        <div className="px-24 pb-10">
          <Consultation />
        </div>
      </div>
      <Footer />
    </>
  );
};
