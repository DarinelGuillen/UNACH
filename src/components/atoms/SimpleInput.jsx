import React, { useEffect } from 'react';
import styled from 'styled-components';

const SimpleInputWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0.8rem;
  input {
    width: 100%;
    height: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    color: linear-gradient(40deg, black 40%, transparent 40%);
  }
  input::placeholder {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const SimpleInput = ({ placeholder, id, width, height, type }) => {
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    console.log("🚀 ~ SimpleInput ~ e.target.value:", e.target.value);
    // Dispatch the inputChange event with the new value
  };

  useEffect(() => {
    const inputElement = document.querySelector('input');
    inputElement.setAttribute('type', type);
    inputElement.setAttribute('placeholder', placeholder);
    inputElement.setAttribute('id', id);
    inputElement.style.width = width || "100%";
    inputElement.style.height = height || "40px";
    inputElement.addEventListener('input', handleInputChange);
    return () => {
      inputElement.removeEventListener('input', handleInputChange);
    };
  }, [placeholder, id, width, height, type]);

  return (
    <SimpleInputWrapper>
      <input type="text" />
    </SimpleInputWrapper>
  );
};

export default SimpleInput;
