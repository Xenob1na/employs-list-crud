import BtnUI from "./ui/BtnUI";

const EmployeesListItem = () => {
  return (
    <div className="mt-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Смирнов Иван Иванович
              </th>
              <td className="px-6 py-4">+7 (999) 999-99-99</td>
              <td className="px-6 py-4">ivcan@example.com</td>
              <td className="px-6 py-4">
              <BtnUI name="Редактировать" />
              <BtnUI name="Удалить" />
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Смирнов Иван Иванович
              </th>
              <td className="px-6 py-4">+7 (999) 999-99-99</td>
              <td className="px-6 py-4">ivcan@example.com</td>
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
