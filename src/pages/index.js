import { useState } from 'react';

export default Calculator => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {

    setExpression((prev) => prev + value);
  };

  const handleExtraClick = (value) => {
    if (value === 'C') {
      setExpression('');
    } else if (value === '←') {
      setExpression((prev) => prev.slice(0, -1));
    } else {
      setExpression((prev) => prev + value);
    }
  }

  const handleClearButtonClick = () => {
    setExpression('');
  };

  const handleCalculateButtonClick = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };



  return (
    <div class="bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="p-6 bg-white rounded-md shadow-md">
          <div className="mb-4 text-2xl font-bold">{expression}</div>
          <div className="grid grid-cols-4 gap-2">
            <button className="col-span-2 p-4 text-2xl text-center bg-purple-400 rounded-md" onClick={handleClearButtonClick}>
              AC
            </button>
            <button className="col-span-2 p-4 text-2xl text-center bg-red-600 rounded-md" onClick={() => handleExtraClick('←')}>
              ←
            </button>
            {/* <button className="p-4 text-2xl text-center bg-gray-200 rounded-md" onClick={() => handleButtonClick('(')}>
              (
            </button>
            <button className="p-4 text-2xl text-center bg-gray-200 rounded-md" onClick={() => handleButtonClick(')')}>
              )
            </button> */}
            <button className="p-4 text-2xl text-center bg-blue-300 rounded-md" onClick={() => handleExtraClick('C')}>
              C
            </button>
            <button className="p-4 text-2xl text-center bg-blue-300" onClick={() => handleButtonClick('/')}>
              ÷
            </button>
            <button className="p-4 text-2xl text-center bg-blue-300" onClick={() => handleButtonClick('*')}>
              ×
            </button>

            <button className="p-4 text-2xl text-center bg-blue-300" onClick={() => handleButtonClick('-')}>
              –
            </button>
            <button className="p-4 text-2xl text-center bg-gray-300" onClick={() => handleButtonClick('7')}>
              7
            </button>
            <button className="p-4 text-2xl text-center bg-gray-300" onClick={() => handleButtonClick('8')}>
              8
            </button>
            <button className="p-4 text-2xl text-center bg-gray-300" onClick={() => handleButtonClick('9')}>
              9
            </button>
            <button className="row-span-2 p-4 text-2xl text-center bg-blue-300" onClick={() => handleButtonClick('+')}>
              +
            </button>
            <button className="p-4 text-2xl text-center bg-gray-300" onClick={() => handleButtonClick('4')}>
              4
            </button>
            <button className="p-4 text-2xl text-center bg-gray-300" onClick={() => handleButtonClick('5')}>
              5
            </button>
            <button className="p-4 text-2xl text-center bg-gray-300" onClick={() => handleButtonClick('6')}>
              6
            </button>
            <button className="p-4 text-2xl text-center bg-gray-300" onClick={() => handleButtonClick('1')}>
              1
            </button>
            <button className="p-4 text-2xl text-center bg-gray-300" onClick={() => handleButtonClick('2')}>
              2
            </button>
            <button className="p-4 text-2xl text-center bg-gray-300 " onClick={() => handleButtonClick('3')}>
              3
            </button>
            <button className="row-span-2 p-4 text-2xl text-center bg-emerald-600 rounded-md" onClick={handleCalculateButtonClick}>
              =
            </button>
            <button className="p-4 text-2xl text-center bg-rose-400" onClick={() => handleButtonClick('.')}>
              .
            </button>

            <button className="col-span-2 p-6 text-2xl text-center bg-gray-300" onClick={() => handleButtonClick('0')}>
              0
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}