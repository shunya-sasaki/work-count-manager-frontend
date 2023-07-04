interface InterfaceAddButton {
    onClick : () => void;
    label: string;
}

export const AddButton = (props: InterfaceAddButton) => {
    const { onClick, label } = props;

    return (
        <button
            onClick={onClick}
            className="ml-2 px-2 my-2 rounded text-white bg-slate-300 hover:bg-slate-500"
        >
            {label}
        </button>
    )

}