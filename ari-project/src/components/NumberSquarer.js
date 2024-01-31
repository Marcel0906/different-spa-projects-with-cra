import React, { useState } from 'react';

function NumberSquarer() {
  // State to keep track of the input number and the result
  const [inputNumber, setInputNumber] = useState('');
  const [result, setResult] = useState(null);

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputNumber(event.target.value);
  };

  // Function to handle button click and calculate the square
  const handleButtonClick = () => {
    const squaredResult = Math.pow(parseFloat(inputNumber), 2);
    setResult(squaredResult);
  };

  return (
    <div>
      <label htmlFor="numberInput">Enter a number: </label>
      <input
        type="number"
        id="numberInput"
        value={inputNumber}
        onChange={handleInputChange}
      />

      <button onClick={handleButtonClick}>Square</button>

      {result !== null && (
        <p>
          The square of {inputNumber} is {result}.
        </p>
      )}
    </div>
  );
}

export default NumberSquarer;


// In this example, the inputNumber state variable is used to keep track of the user
//  input, and the result state variable is used to store the calculated square. 
//  The handleInputChange function updates the input number as the user types, and the 
//  handleButtonClick function calculates the square when the button is clicked.

