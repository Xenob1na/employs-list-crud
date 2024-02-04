const Btn = (props: any) => {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
        >
            {props.name}
        </button>
    )
}

export default Btn