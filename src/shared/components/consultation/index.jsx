import { useState } from "react";
import { submitRequest } from "../../utils";
import { LuLoader2 } from "react-icons/lu";

export const Consultation = () => {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const handleSend = async () => {
    setLoading(true);
    await submitRequest(0, 0, form.name, form.phone);
    setLoading(false);
  };

  return (
    <div className="bg-[#151515] rounded-[20px] p-10 sm:p-6 xs:p-2">
      <p className="text-[55px] text-white sm:text-2xl main-font">
        Получить консультацию
      </p>
      <p className="text-[25px] text-white font-light sm:text-[17px] tracking-wider mt-6 sm:text-md sm:mt-4 small-font">
        Расскажем о бизнес-центре и поможем выбрать офис
      </p>
      <div className="flex justify-between sm:flex-col gap-10 my-10 sm:my-6 ">
        <div className="w-full">
          <p className="text-white main-font">Ваше имя</p>
          <input
            placeholder="Введите ваше имя"
            className="w-full bg-transparent border-b-[1px] border-gray-700 border-solid focus:outline-none focus:border-transparent text-white small-font"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="w-full">
          <p className="text-white main-font">Введите ваш номер телефона</p>
          <input
            placeholder="+996"
            className="w-full bg-transparent border-b-[1px] border-gray-700 border-solid focus:outline-none focus:border-transparent text-white small-font"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
      </div>
      <button
        className="bg-[#848484] rounded-[15px] text-white h-[40px] sm:w-full small-font active:scale-95 min-w-[200px] flex justify-center items-center transition-all duration-700"
        onClick={handleSend}
      >
        {loading ? <LuLoader2 size={27} className="text-white animate-spin" /> : "Оставить заявку"}
      </button>
      <div className="mt-4 flex items-center gap-8 sm:flex-col sm:items-start sm:gap-4">
        <button
          className="bg-white rounded-[15px] text-black px-4 py-2 sm:w-full small-font"
          onClick={() => (window.location.href = "tel:+996995090090")}
        >
          Связаться
        </button>
        <p className="text-[15px] text-white/50 xs:text-[13px] small-font">
          Нажимая на кнопку, вы принимаете условия политики конфиденциальности
        </p>
      </div>
    </div>
  );
};
