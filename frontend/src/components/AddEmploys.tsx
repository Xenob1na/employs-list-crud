import { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const AddEmploys = () => {
  interface Employee {
    name: string;
    email: string;
    phone: string;
  }

  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);

  const [employee, setEmployee] = useState<Employee>({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!employee.name || !employee.email || !employee.phone) {
        toast.error("Заполните все поля");
        setValidated(true);
        return;
      }
      setLoading(true);
      await axios.post("http://localhost:3000/api/v1/employs/", employee);
      toast.success("Идет добавление...");
      setTimeout(() => {
        navigate("/");
      }, 2000);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="max-w-[980px] mx-auto mt-8">
        <h1 className="text-[30px] font-bold font-mono text-center mb-4">
          Добавить Сотрудника
        </h1>
        <div className="z-50 bg-white p-8 rounded shadow">
          <form onSubmit={onSubmit} action="/" className="mx-auto rounded-lg">
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  ФИО
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Смирнов Иван Иванович"
                  onChange={(e) =>
                    setEmployee({ ...employee, name: e.target.value })
                  }
                  className={`${validated ? "border-red-500" : ""} w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring`}
                />
              </div>
              <div>
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="smirnov@i.ru"
                  onChange={(e) =>
                    setEmployee({ ...employee, email: e.target.value })
                  }
                  className={`${validated ? "border-red-500" : ""} w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring`}
                />
              </div>
              <div>
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Номер телефона
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+7 (999) 999-99-99"
                  onChange={(e) =>
                    setEmployee({ ...employee, phone: e.target.value })
                  }
                  className={`${validated ? "border-red-500" : ""} w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring`}
                />
              </div>
              {!loading && (
                <button className="block rounded-lg bg-[#605BFF] hover:bg-[#4b46c5] px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base">
                  Добавить
                </button>
              )}
              {loading && (
                <div className="flex justify-center">
                  <button className="block rounded-lg bg-[#605BFF] hover:bg-[#4b46c5] px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base">
                    <AiOutlineLoading3Quarters
                      className="animate-spin text-center"
                      style={{ fontSize: "24px" }}
                    />
                  </button>
                </div>
              )}
              <div className="border-t" />
              <span className="text-[#605BFF] text-center">ИЛИ</span>
              <div className="border-t" />
              <button
                className="block rounded-lg bg-[#605BFF] hover:bg-[#4b46c5] px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base"
                onClick={() => navigate("/")}
              >
                Назад
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEmploys;