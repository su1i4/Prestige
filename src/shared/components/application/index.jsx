import { useState } from "react";
import { submitRequest } from "../../utils";
import { LuLoader2 } from "react-icons/lu";

export const Application = ({ square, lock, name, obj, office }) => {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    setLoading(true)
    await submitRequest(obj.floor, office + 1, form.name, form.phone)
    setLoading(false)
  }

  console.log(obj, 'this is console.log')

  return (
    <div className="bg-[#DADADA] rounded-[20px] p-10 sm:p-4 xs:p-2">
      <p className="text-[30px] text-center font-[600] sm:text-[25px] xs:text-[20px]">{name}</p>
      <p className="text-lg mt-3 text-center sm:text-sm small-font">
        Площадь: {square} м2
      </p>
      <div className="flex sm:flex-col justify-between gap-10 my-10 sm:my-4">
        <div className="w-full">
          <p className="text-[#555555] small-font">Ваше имя</p>
          <input
            placeholder="Введите ваше имя"
            className="w-full bg-transparent small-font border-b-[1px] border-gray-700 border-solid focus:outline-none focus:border-transparent text-[#555555]"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="w-full">
          <p className="text-[#555555] small-font">Введите номер телефона</p>
          <input
            placeholder="+996"
            className="w-full bg-transparent small-font border-b-[1px] border-gray-700 border-solid focus:outline-none focus:border-transparent text-[#555555]"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
      </div>
      <div className="mt-4 flex sm:flex-col items-center sm:items-start gap-8">
        <button
          className="rounded-[15px] text-white bg-[#494949] h-[40px] min-w-[200px] transition-all duration-700 active:scale-95 flex justify-center items-center small-font"
          onClick={handleSend}
        >
         {loading ? <LuLoader2 size={27} className="text-white animate-spin" />  : 'Оставить заявку'}
        </button>
        <p className="text-[15px] small-font">
          Нажимая на кнопку, вы принимаете условия политики конфиденциальности
        </p>
      </div>
    </div>
  );
};

