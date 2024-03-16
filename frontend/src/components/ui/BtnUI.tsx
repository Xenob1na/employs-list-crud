const Btn = ({name}) => {
    return (
        <button
            type="button"
            className="rounded-lg bg-[#605BFF] hover:bg-[#4b46c5] text-white font-bold py-2 px-4  mr-3"
        >
            {name}
        </button>
    )
}

export default Btn