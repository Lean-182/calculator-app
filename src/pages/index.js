import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'react-feather';

export default Calculator => {

  const [equation, setEquation] = useState("");

  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleVariants = {
    open: { scale: 1.2, rotate: 45 },
    closed: { scale: 1, rotate: 0 },
  };

  return (

    <div className="bg-slate-200 backdrop-blur-sm bg-white/30">
      <div className="flex flex-col items-center justify-center h-screen rounded-md">
        <div className={`calculator ${isDarkMode ? 'dark-mode' : ''} rounded-md`}>
          <div className="p-8 rounded-md shadow-md">
            <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-1 grid-rows-8 gap-4 rounded-md">
              <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                variants={toggleVariants}
                animate={isDarkMode ? 'open' : 'closed'}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              // className="col-span-4 mb-4 text-2xl font-bold"
              >
                {isDarkMode ? <Sun /> : <Moon />}
              </motion.button>
              <div className="col-span-4 mb-4 text-2xl font-bold">{expression}</div>
              <button className="col-span-2 p-4 text-2xl text-center bg-purple-600 rounded-md" onClick={handleClearButtonClick}>
                AC
              </button>
              <button className="col-span-2 p-4 text-2xl text-center bg-red-600 rounded-md" onClick={() => handleExtraClick('←')}>
                ←
              </button>
              <button className="p-4 text-2xl text-center bg-purple-600 rounded-md" onClick={() => handleExtraClick('C')}>
                C
              </button>

              {/* <button className="p-4 text-2xl text-center bg-gray-200 rounded-md" onClick={() => handleButtonClick('(')}>
              (
            </button>
            <button className="p-4 text-2xl text-center bg-gray-200 rounded-md" onClick={() => handleButtonClick(')')}>
              )
            </button> */}

              <button className="p-4 text-2xl text-center bg-pink-900" onClick={() => handleButtonClick('/')}>
                ÷
              </button>
              <button className="p-4 text-2xl text-center bg-pink-900" onClick={() => handleButtonClick('*')}>
                ×
              </button>
              <button className="p-4 text-2xl text-center bg-pink-900" onClick={() => handleButtonClick('-')}>
                –
              </button>
              <button className="p-4 text-2xl text-center bg-rose-600" onClick={() => handleButtonClick('7')}>
                7
              </button>
              <button className="p-4 text-2xl text-center bg-rose-600" onClick={() => handleButtonClick('8')}>
                8
              </button>
              <button className="p-4 text-2xl text-center bg-rose-600" onClick={() => handleButtonClick('9')}>
                9
              </button>
              <button className="row-span-2 p-4 text-2xl text-center bg-pink-900" onClick={() => handleButtonClick('+')}>
                +
              </button>
              <button className="p-4 text-2xl text-center bg-rose-600" onClick={() => handleButtonClick('4')}>
                4
              </button>
              <button className="p-4 text-2xl text-center bg-rose-600" onClick={() => handleButtonClick('5')}>
                5
              </button>
              <button className="p-4 text-2xl text-center bg-rose-600" onClick={() => handleButtonClick('6')}>
                6
              </button>

              <button className="p-4 text-2xl text-center bg-rose-600" onClick={() => handleButtonClick('1')}>
                1
              </button>
              <button className="p-4 text-2xl text-center bg-rose-600" onClick={() => handleButtonClick('2')}>
                2
              </button>
              <button className="p-4 text-2xl text-center bg-rose-600 " onClick={() => handleButtonClick('3')}>
                3
              </button>

              <button className="row-span-2 p-4 text-2xl text-center bg-emerald-600 rounded-md" onClick={handleCalculateButtonClick}>
                =
              </button>
              <button className="p-4 text-2xl text-center bg-rose-600 rounded-md" onClick={() => handleButtonClick('.')}>
                .
              </button>

              <button className="col-span-2 p-6 text-2xl text-center bg-rose-600" onClick={() => handleButtonClick('0')}>
                0
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}