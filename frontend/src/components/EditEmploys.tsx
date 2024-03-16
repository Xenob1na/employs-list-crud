import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { employServices } from "../services/employs.services";

const EditEmploys = () => {
  const navigate = useNavigate();

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
  const { id } = useParams();

  useEffect(() => {
    getEmploy();
  }, []);

  const getEmploy = async () => {
    try {
      const res = await employServices.getEmployById(Number(id));
      setEmployee(res);
    } catch (error) {
      console.log(error);
    }
  };

  const Update = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await employServices.updateEmploy(Number(id), employee);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="max-w-[980px] mx-auto mt-8">
        <h1 className="text-[30px] font-bold font-mono text-center mb-4">
          Редактирование Сотрудника
        </h1>
        <div className="z-50 bg-white p-8 rounded shadow">
          <form onSubmit={Update} action="/" className="mx-auto rounded-lg">
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  ФИО
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Загружается автоматически"
                  value={employee.name}
                  onChange={(e) =>
                    setEmployee({ ...employee, name: e.target.value })
                  }
                  className={`w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring`}
                />
              </div>
              <div>
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Загружается автоматически"
                  value={employee.email}
                  onChange={(e) =>
                    setEmployee({ ...employee, email: e.target.value })
                  }
                  className={` w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring`}
                />
              </div>
              <div>
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Номер телефона
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Загружается автоматически"
                  value={employee.phone}
                  onChange={(e) =>
                    setEmployee({ ...employee, phone: e.target.value })
                  }
                  className={`w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring`}
                />
              </div>
              <button className="block rounded-lg bg-[#605BFF] hover:bg-[#4b46c5] px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base">
                Редактировать
              </button>
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
    </div>
  );
};

export default EditEmploys;
