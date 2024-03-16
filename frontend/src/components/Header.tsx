import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-[30px] font-bold font-mono">Список сотрудников</h1>
      <Link to={"/add"}>
        <button
          type="button"
          className="rounded-lg bg-[#605BFF] hover:bg-[#4b46c5] text-white font-bold py-2 px-8 flex gap-2 items-center"
        >
          <FaPlus />
          <span>Добавить</span>
        </button>
      </Link>
    </div>
  );
};

export default Header;
