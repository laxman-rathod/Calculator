
let Buttons = ({btnClicked}) => {

    return(
        <div className="w-full h-auto flex justify-center items-center flex-wrap mt-16 gap-4">
         {/* <div className="w-full h-auto grid grid-cols-4 place-center mt-16 gap-4"> */}
         <button className="shadow-md w-16 h-16 rounded-2xl bg-yellow-300 text-orange-700 font-bold" onClick={() => btnClicked("C")}>C</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-gray-300 font-bold" onClick={() => btnClicked("(")}>(</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-gray-300 font-bold" onClick={() => btnClicked(")")}>)</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-orange-600 text-white font-bold" onClick={() => btnClicked("/")}>/</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-gray-300 font-bold" onClick={() => btnClicked("7")}>7</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-gray-300 font-bold" onClick={() => btnClicked("8")}>8</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-gray-300 font-bold" onClick={() => btnClicked("9")}>9</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-orange-600 text-white font-bold" onClick={() => btnClicked("*")}>X</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-gray-300 font-bold" onClick={() => btnClicked("4")}>4</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-gray-300 font-bold" onClick={() => btnClicked("5")}>5</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-gray-300 font-bold" onClick={() => btnClicked("6")}>6</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-orange-600 text-white font-bold" onClick={() => btnClicked("-")}>-</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-gray-300 font-bold" onClick={() => btnClicked("1")}>1</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-gray-300 font-bold" onClick={() => btnClicked("2")}>2</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-gray-300 font-bold" onClick={() => btnClicked("3")}>3</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-orange-600 text-white font-bold" onClick={() => btnClicked("+")}>+</button>
            <button className="shadow-md w-36 h-16 rounded-2xl bg-gray-300 font-bold" onClick={() => btnClicked("0")}>0</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-gray-300 font-bold" onClick={() => btnClicked(".")}>.</button>
            <button className="shadow-md w-16 h-16 rounded-2xl bg-green-600 text-white font-bold" onClick={() => btnClicked("=")}>=</button>
        </div>
    );
}

export default Buttons;