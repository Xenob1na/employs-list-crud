import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-between">
      <h1 className="text-[30px] font-bold font-mono">Список сотрудников</h1>
      <button
        type="button"
        className="rounded-lg bg-[#605BFF] hover:bg-[#4b46c5] text-white font-bold py-2 px-8 flex gap-2 items-center"
        onClick={() => setShowModal(true)}
      >
        <FaPlus />
        <span>Добавить</span>
      </button>
      {showModal ? <Modal onClose={() => setShowModal(false)} /> : null}
    </div>
  );
};

export default Header;
