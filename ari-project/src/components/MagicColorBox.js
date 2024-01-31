import React, { useState } from 'react';

function MagicColorBox() {
  // State to keep track of the current color
  const [boxColor, setBoxColor] = useState('#00ff00'); // Initial color (you can set your preferred initial color)

  // Function to generate a random color
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generating a random hex color
    setBoxColor(randomColor);
  };

  return (
    <div
      onClick={generateRandomColor}
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: boxColor,
        cursor: 'pointer',
        margin: '0 auto',
      }}
    >
      <h1>Click me to change color!</h1>
    </div>
  );
}

export default MagicColorBox;

