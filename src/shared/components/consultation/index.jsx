import { useState } from "react";

export const Consultation = () => {
  const [form, setForm] = useState({ name: "", phone: "" });
  return (
    <div className="bg-[#151515] rounded-[20px] p-10">
      <p className="text-3xl text-white">Получить консультацию </p>
      <p className="text-lg text-white mt-6">
        Расскажем о бизнес - центре и поможем выбрать офис
      </p>
      <div className="flex justify-between gap-10 my-10 ">
        <div className="w-full">
          <p className="text-white">Ваше имя</p>
          <input
            placeholder="Введите ваше имя"
            className="w-full bg-transparent border-b-[1px] border-gray-700 border-solid focus:outline-none focus:border-transparent text-white"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="w-full">
          <p className="text-white">Ваше имя</p>
          <input
            placeholder="Введите ваше имя"
            className="w-full bg-transparent border-b-[1px] border-gray-700 border-solid focus:outline-none focus:border-transparente text-white"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
      </div>
      <button className="bg-[#848484] rounded-[15px] text-white px-4 py-2">
        Оставить заявку
      </button>
      <div className="mt-4 flex items-center gap-8">
        <button className="bg-white rounded-[15px] text-black px-4 py-2">
          Оставить заявку
        </button>
        <p className="text-[15px] text-white/50">
          Нажимая на кнопку, вы принимаете условия политики конфеденциальности
        </p>
      </div>
    </div>
  );
};
