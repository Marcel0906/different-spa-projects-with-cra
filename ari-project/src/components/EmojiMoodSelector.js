import React, { useState } from 'react';

function EmojiMoodSelector() {
  // State to keep track of the selected mood
  const [selectedMood, setSelectedMood] = useState(null);

  // Map of mood emojis and their corresponding messages
  const moodOptions = {
    '😊': 'You\'re feeling happy!',
    '😢': 'You\'re feeling sad.',
    '😠': 'You\'re feeling angry!',
    '😍': 'You\'re feeling loved!',
    // Add more emojis and messages as needed
  };

  // Function to handle mood selection
  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div>
      <h1>Select your mood:</h1>

      <div style={{ fontSize: '2rem', cursor: 'pointer' }}>
        {Object.keys(moodOptions).map((mood) => (
          <span
            key={mood}
            role="img"
            aria-label={`Mood: ${mood}`}
            onClick={() => handleMoodSelect(mood)}
            style={{ marginRight: '10px' }}
          >
            {mood}
          </span>
        ))}
      </div>

      {selectedMood && (
        <p>{moodOptions[selectedMood]}</p>
      )}
    </div>
  );
}

export default EmojiMoodSelector;

