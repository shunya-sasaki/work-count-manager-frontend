interface InterfaceDeleteButton {
    onClick: (index: number) => void;
    index: number;
}

export const DeleteButton = (props: InterfaceDeleteButton) => {
    const { onClick, index } = props;
    return (
        <button
            onClick={() => onClick(index)}
            className="mt-1 mb-1 text-xs w-4 h-4 rounded-full align-middle text-white bg-slate-500"
        >
            -
        </button>
    );
};
