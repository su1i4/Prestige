import { useState } from "react";

export const Application = ({ square, lock, name }) => {
  const [form, setForm] = useState({ name: "", phone: "" });
  const lockText = lock ? 'Доступно': 'Недоступно для аренды'
  return (
    <div className="bg-[#DADADA] rounded-[20px] p-10 sm:p-4 xs:p-2">
      <p className="text-[30px] text-center font-[600] sm:text-[25px] xs:text-[20px]">{name}</p>
      <p className="text-lg mt-3 text-center sm:text-sm">
        Площадь: {square} м2
      </p>
      <p className="text-2xl mt-3 text-center font-[500] sm:text-lg ">
        {lockText}
      </p>
      <div className="flex sm:flex-col justify-between gap-10 my-10 sm:my-4">
        <div className="w-full">
          <p className="text-[#555555]">Ваше имя</p>
          <input
            placeholder="Введите ваше имя"
            className="w-full bg-transparent border-b-[1px] border-gray-700 border-solid focus:outline-none focus:border-transparent text-[#555555]"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="w-full">
          <p className="text-[#555555]">Введите ваш номер телефона</p>
          <input
            placeholder="Введите ваше имя"
            className="w-full bg-transparent border-b-[1px] border-gray-700 border-solid focus:outline-none focus:border-transparent text-[#555555]"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
      </div>
      <div className="mt-4 flex sm:flex-col items-center sm:items-start gap-8">
        <button className="rounded-[15px] text-white bg-[#494949] px-4 py-2">
          Оставить заявку
        </button>
        <p className="text-[15px]">
          Нажимая на кнопку, вы принимаете условия политики конфеденциальности
        </p>
      </div>
    </div>
  );
};
