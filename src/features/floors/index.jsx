import { useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { ReactComponent as Logo } from "../../shared/icons/DarkLogo.svg";
import { Application } from "../../shared/components/application";
import { floors } from "../../lib/data";

export const Floors = () => {
  const { id } = useParams();
  const thisFloor = floors[id - 1]
  return (
    <div className="w-full px-10 py-4">
      <div className="w-full flex items-center justify-between">
        <IoArrowBack size={30} className="cursor-pointer" />
        <p className="text-[30px] font-[500]">Типовой план {id} этажа</p>
        <Logo />
      </div>
      <div className="px-20 my-10">
      <img src={thisFloor.image} alt={`Prestige Tower Типовой план ${id} этажа`} />
      </div>
      <Application number={thisFloor.floor} lock={thisFloor.count} />
    </div>
  );
};
