import React, { useState } from 'react';

function ColorPicker() {
  // State to keep track of the input color and the current color
  const [inputColor, setInputColor] = useState('');
  const [currentColor, setCurrentColor] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputColor(event.target.value);
  };

  // Function to handle button click and update the background color
  const handleButtonClick = () => {
    setCurrentColor(inputColor);
  };

  return (
    <div>
      <label htmlFor="colorInput">Enter a color: </label>
      <input
        type="text"
        id="colorInput"
        value={inputColor}
        onChange={handleInputChange}
      />

      <button onClick={handleButtonClick}>Set Color</button>

      {currentColor && (
        <div
          style={{
            width: '600px',
            height: '600px',
            backgroundColor: currentColor,
            margin: '0 auto',
          }}
        >
          <h1>Background Color</h1>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;

