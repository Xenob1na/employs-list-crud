import BtnUI from "./ui/BtnUI";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { employServices } from "../services/employs.services";

import { MdDelete } from "react-icons/md";

const notify = () => toast.warning("Сотрудник был удален");

import { Link } from "react-router-dom";

import { FaEye } from "react-icons/fa6";

const EmployeesListItem = ({ name, email, phone, id, setEmployee, employee }) => {
  const deleteEmploy = async (id: number) => {
    try {
      await employServices.deleteEmploy(id);
      notify();
      const remaining = employee.filter((employee) => employee.id !== id);
      setEmployee(remaining);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ФИО
              </th>
              <th scope="col" className="px-6 py-3">
                Номер телефона
              </th>
              <th scope="col" className="px-6 py-3">
                Почта
              </th>
              <th scope="col" className="px-6 py-3">
                Действия
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white  even:bg-gray-50  border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {name}
              </th>
              <td className="px-6 py-4">{phone}</td>
              <td className="px-6 py-4">{email}</td>
              <td className="px-6 py-4 flex">
                <Link to={`/edit/${id}`}>
                  <BtnUI name="Редактировать" />
                </Link>
                <button
                  type="button"
                  className="rounded-lg bg-red-500 flex items-center gap-2 hover:bg-red-600  text-white font-bold py-2 px-4  mr-3"
                  onClick={() => deleteEmploy(id)}
                >
                  <MdDelete />
                  <span>Удалить</span>
                </button>
                <Link to={`/view/${id}`}>
                  <button
                    type="button"
                    className="rounded-lg bg-green-500 flex items-center gap-2 hover:bg-green-600  text-white font-bold py-2 px-4  mr-3"
                  >
                    <FaEye />
                    <span>Подробнее</span>
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesListItem;
