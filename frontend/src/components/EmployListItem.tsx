import BtnUI from "./ui/BtnUI";

const EmployeesListItem = ({ name, email, phone }) => {
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
                <BtnUI name="Удалить" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesListItem;
