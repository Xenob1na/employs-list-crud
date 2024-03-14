import BtnUI from "./ui/BtnUI";
import axios from "axios";

const EmployeesListItem = ({ name, email, phone,id }) => {

  const deleteEmploy = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/employs/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

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
              <td className="px-6 py-4">
                <BtnUI name="Редактировать" />
                <BtnUI name="Удалить" onClick={() => deleteEmploy(id)} />
                <button type="button" className="rounded-lg bg-[#605BFF] hover:bg-[#4b46c5] text-white font-bold py-2 px-4  mr-3" onClick={() => deleteEmploy(id)}>ss</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesListItem;
