import React from "react";

const ScientificFunctions = ({ onFunctionPress }) => {
  const functions = [
    { symbol: "sin", name: "Sine" },
    { symbol: "cos", name: "Cosine" },
    { symbol: "tan", name: "Tangent" },
    { symbol: "log", name: "Logarithm" },
    { symbol: "sqrt", name: "Square Root" },
    { symbol: "^", name: "Exponent" },
    { symbol: "(", name: "Open Parenthesis" },
    { symbol: ")", name: "Close Parenthesis" },
  ];

  return (
    <div className="grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-15 gap-4">
      {functions.map((func) => (
        <button
          key={func.symbol}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          onClick={() => onFunctionPress(func.symbol)}
        >
          {func.name}
        </button>
      ))}
    </div>
  );
};

export default ScientificFunctions;
