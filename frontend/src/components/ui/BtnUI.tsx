import { FaPencilAlt } from "react-icons/fa";

const Btn = ({name}) => {
    return (
        <button
            type="button"
            className="rounded-lg flex items-center gap-2 bg-[#605BFF] hover:bg-[#4b46c5] text-white font-bold py-2 px-4  mr-3"
        >
            <FaPencilAlt />
            {name}
        </button>
    )
}

export default Btn