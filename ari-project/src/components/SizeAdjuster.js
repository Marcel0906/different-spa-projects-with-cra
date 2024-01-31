import React, { useState } from 'react';

function SizeAdjuster() {
  // Initial font size and step for adjustment
  const initialFontSize = 16; // You can set your preferred initial font size
  const step = 2; // You can adjust the step size for increasing/decreasing the font size

  // State to keep track of the current font size
  const [fontSize, setFontSize] = useState(initialFontSize);

  // Function to increase the font size
  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + step);
  };

  // Function to decrease the font size
  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(initialFontSize, prevSize - step));
  };

  return (
    <div>
      <p style={{ fontSize: `${fontSize}px` }}>
        This is an adjustable text with font size {fontSize}px.
      </p>

      <div>
        <button onClick={increaseFontSize}>Increase Font Size</button>
        <button onClick={decreaseFontSize}>Decrease Font Size</button>
      </div>
    </div>
  );
}

export default SizeAdjuster;

