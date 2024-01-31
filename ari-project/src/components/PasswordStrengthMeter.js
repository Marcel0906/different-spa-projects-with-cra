import React, { useState } from 'react';

function PasswordStrengthMeter() {
  // State to keep track of the password and its strength
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);

  // Function to calculate the password strength
  const calculateStrength = () => {
    // Simple strength calculation based on password length
    const passwordLength = password.length;
    let newStrength = 0;

    // Add strength based on length
    if (passwordLength >= 8) newStrength += 1;
    if (passwordLength >= 12) newStrength += 1;

    // Add strength for variety of characters (uppercase, lowercase, digits, symbols)
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()-=_+{}[\]:;<>,.?/\\|]/.test(password);

    const characterTypes = [hasUpperCase, hasLowerCase, hasDigit, hasSymbol];
    const characterTypesCount = characterTypes.filter(Boolean).length;

    // Add strength based on character types
    if (characterTypesCount >= 3) newStrength += 1;
    if (characterTypesCount === 4) newStrength += 1;

    // Update the strength state
    setStrength(newStrength);
  };

  return (
    <div>
      <label htmlFor="passwordInput">Enter Password: </label>
      <input
        type="password"
        id="passwordInput"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          calculateStrength();
        }}
      />

      <div>
        <p>Password Strength: {strength}/3</p>
      </div>
    </div>
  );
}

export default PasswordStrengthMeter;

