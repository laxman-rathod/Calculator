let InputOutputShow = ({showData}) => {
    return(
        <div className="w-full h-auto">
            <input className=" font-bold outline-none w-full h-24 p-8 text-end text-5xl" type="text" value={showData} readOnly />
        </div>
    );
}

export default InputOutputShow;