import React, { useEffect } from 'react';

const CustomButton = ({ width, height, text, functionName }) => {
  useEffect(() => {
    // Add a click event listener to call the specified function
    const button = document.getElementById('customButton');
    if (functionName) {
      button.addEventListener('click', () => {
        window[functionName](); // Call the function
      });
    }

    return () => {
      if (functionName) {
        button.removeEventListener('click', () => {
          window[functionName]();
        });
      }
    };
  }, [functionName]);

  return (
    <button
      id="customButton"
      style={{
        width: width || '100px',
        height: height || '40px',
        padding: '10px',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      {text || 'Button'}
    </button>
  );
};

export default CustomButton;
