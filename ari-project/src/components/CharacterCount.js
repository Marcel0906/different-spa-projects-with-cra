import React, {useState} from 'react';

const CharacterCount = () => {
    const [word, setWord] = useState('');

    const handleText = (e) => {
       setWord(e.target.value);
      };
    
      return (
    
        <div>
          <input type="text" onChange={handleText} />
          <p>{word.length}</p>
        
        </div>
      );
    };

    export default CharacterCount;



    // Create the functional component
// function CharacterCount() {
    // State to track the text input and character count
//     const [textInput, setTextInput] = useState('');
//     const charCount = textInput.length;
  
     // Function to handle text input changes
//     const handleInputChange = (event) => {
//       setTextInput(event.target.value);
//     };
  
     // JSX structure of the component
//     return (
//       <div>
//         <label htmlFor="textInput">Enter Text:</label>
//         <textarea
//           id="textInput"
//           rows="4"
//           cols="50"
//           value={textInput}
//           onChange={handleInputChange}
//         ></textarea>
  
//         <p>Character Count: {charCount}</p>
//       </div>
//     );
//   }