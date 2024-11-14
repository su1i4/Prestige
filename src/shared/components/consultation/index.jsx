import { useState } from "react";
import { LuLoader2 } from "react-icons/lu";
import { submitRequest } from "../../utils";

export const Consultation = () => {
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
    console.log("sulaiman");
    setLoading(true);
    await submitRequest(0, 0, form.name, form.phone);
    setLoading(false);
    setForm({ name: "", phone: "+996" });
    // }
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
            onChange={handleNameChange}
          />
        </div>
        <div className="w-full">
          <p className="text-white main-font">Введите ваш номер телефона</p>
          <input
            placeholder="+996"
            className="w-full bg-transparent border-b-[1px] border-gray-700 border-solid focus:outline-none focus:border-transparent text-white small-font"
            value={form.phone}
            onChange={handlePhoneChange}
          />
        </div>
      </div>
      <button
        className="bg-[#848484] rounded-[15px] text-white h-[40px] sm:w-full small-font active:scale-95 min-w-[200px] flex justify-center items-center transition-all duration-700"
        onClick={handleSubmit}
      >
        {loading ? (
          <LuLoader2 size={27} className="text-white animate-spin" />
        ) : (
          "Оставить заявку"
        )}
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
