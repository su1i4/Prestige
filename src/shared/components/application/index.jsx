import { useState } from "react";
import { submitRequest } from "../../utils";
import { LuLoader2 } from "react-icons/lu";

export const Application = ({ square, lock, name, obj, office }) => {
  const [form, setForm] = useState({ name: "", phone: "+996" });
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);

  const validateName = (name) => {
    if (!name) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters";
    }
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone) {
      return "Phone number is required";
    } else if (!phone.startsWith("+996")) {
      return "Phone number must start with +996";
    } else if (phone.length !== 12) {
      return "Phone number must be 12 characters including +996";
    }
    return "";
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value;

    if (!input.startsWith("+996")) {
      input = "+996";
    }
    const formattedInput = input.replace(/[^+\d]/g, "");

    setForm({ ...form, phone: formattedInput });
    setErrors({ ...errors, phone: validatePhone(formattedInput) });
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setForm({ ...form, name });
    setErrors({ ...errors, name: validateName(name) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameError = validateName(form.name);
    const phoneError = validatePhone(form.phone);

    setErrors({ name: nameError, phone: phoneError });

    // if (!nameError && !phoneError) {
    setLoading(true);
    await submitRequest(0, 0, form.name, form.phone);
    setForm({ name: "", phone: "+996" });
    setLoading(false);
    // }
  };

  return (
    <div className="bg-[#DADADA] rounded-[20px] p-10 sm:p-4 xs:p-2">
      <p className="text-[30px] text-center font-[600] sm:text-[25px] xs:text-[20px]">
        {name}
      </p>
      <p className="text-lg mt-3 text-center sm:text-sm small-font">
        Площадь: {square} м2
      </p>
      {!lock && (
        <p className="text-lg mt-3 text-center sm:text-sm small-font">
          Продано
        </p>
      )}
      {lock && (
        <p className="text-lg mt-3 text-center sm:text-sm small-font">
          В продаже
        </p>
      )}
      <div className="flex sm:flex-col justify-between gap-10 my-10 sm:my-4">
        <div className="w-full">
          <p className="text-[#555555] small-font">Ваше имя</p>
          <input
            placeholder="Введите ваше имя"
            className="w-full bg-transparent small-font border-b-[1px] border-gray-700 border-solid focus:outline-none focus:border-transparent text-[#555555]"
            value={form.name}
            onChange={handleNameChange}
          />
        </div>
        <div className="w-full">
          <p className="text-[#555555] small-font">Введите номер телефона</p>
          <input
            placeholder="+996"
            className="w-full bg-transparent small-font border-b-[1px] border-gray-700 border-solid focus:outline-none focus:border-transparent text-[#555555]"
            value={form.phone}
            onChange={handlePhoneChange}
          />
        </div>
      </div>
      <div className="mt-4 flex sm:flex-col items-center sm:items-start gap-8">
        <button
          className="rounded-[15px] text-white bg-[#494949] h-[40px] min-w-[200px] transition-all duration-700 active:scale-95 flex justify-center items-center small-font"
          onClick={handleSubmit}
        >
          {loading ? (
            <LuLoader2 size={27} className="text-white animate-spin" />
          ) : (
            "Оставить заявку"
          )}
        </button>
        <p className="text-[15px] small-font">
          Нажимая на кнопку, вы принимаете условия политики конфиденциальности
        </p>
      </div>
    </div>
  );
};
