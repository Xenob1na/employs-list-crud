import { FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-[30px] font-bold font-mono">Список сотрудников</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded flex gap-2 items-center">
        <FaPlus />
        <span>Добавить</span>
      </button>
    </div>
  );
};

export default Header;
