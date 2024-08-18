import React, { useState } from 'react';

export const Calculadora = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res = 0;

    switch (operation) {
      case 'sum':
        res = number1 + number2;
        break;
      case 'subtract':
        res = number1 - number2;
        break;
      case 'multiply':
        res = number1 * number2;
        break;
      case 'divide':
        res = number1 / number2;
        break;
      default:
        break;
    }
    setResult(res);
  };

  return (
    <div>
      <input 
        type="number" 
        placeholder="Número 1" 
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input 
        type="number" 
        placeholder="Número 2" 
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div>
        <button onClick={() => handleCalculate('sum')}>Sumar</button>
        <button onClick={() => handleCalculate('subtract')}>Restar</button>
        <button onClick={() => handleCalculate('multiply')}>Multiplicar</button>
        <button onClick={() => handleCalculate('divide')}>Dividir</button>
      </div>
      {result !== null && <h2>Resultado: {result}</h2>}
    </div>
  );
};
