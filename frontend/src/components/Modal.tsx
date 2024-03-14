import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";

import { employServices } from "../services/employs.services";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ onClose }) => {
  interface Employee {
    name: string;
    email: string;
    phone: string;
  }

  const [employee, setEmployee] = useState<Employee>({
    name: "",
    email: "",
    phone: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:3000/api/v1/employs/", employee);
      toast.success("Запись добавлена");
      onClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="z-50 bg-white p-8 rounded shadow-lg">
          <button
            className="flex justify-between bg-white w-full p-3"
            onClick={onClose}
          >
            <p className="text-[#030229] font-bold text-[16px]">
              Новая заметка
            </p>
            <IoCloseOutline style={{ width: 30, height: 30 }} />
          </button>
          <form onSubmit={onSubmit} action="" className="mx-auto  rounded-lg">
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  ФИО
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) =>
                    setEmployee({ ...employee, name: e.target.value })
                  }
                  className="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
              <div>
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={(e) =>
                    setEmployee({ ...employee, email: e.target.value })
                  }
                  className="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
              <div>
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Номер телефона
                </label>
                <input
                  type="text"
                  name="phone"
                  onChange={(e) =>
                    setEmployee({ ...employee, phone: e.target.value })
                  }
                  className="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
              <button className="block rounded-lg bg-[#605BFF] hover:bg-[#4b46c5] px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base">
                Добавить
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
