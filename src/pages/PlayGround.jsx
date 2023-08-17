import { useState } from 'react';

function PlayGround() {
  const [inputValues, setInputValues] = useState({
    password: '',
    email: '',
  });

  const handleInputChange = (id, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    console.log("🚀 ~ file: Home.jsx:20 ~ handleInputChange ~ inputValues:", inputValues);
  };

  return (
    <>
    <div className="container">
      {/* Input */}
    <div className="box">
      <h1>First Componets</h1>
      <h1>Input simple look in console</h1>
      <simple-input type="email" placeholder="Enter email" id="emailInput"  width="20%"></simple-input>
      <simple-input type="password" placeholder="Enter password" id="passwordInput" width="50%"></simple-input>
      <simple-input type="number" placeholder="Enter Phone" id="PhoneInput" width="90%"></simple-input>
      <simple-input type="text" placeholder="Enter text" id="textareaInput" width="50%" height="auto"></simple-input>
      <simple-textarea type="text" placeholder="Web componet Input-mediano TextArea" id="textareaInput1" width="60%" height="90px"></simple-textarea>
      <simple-textarea type="text" placeholder="Web componet Input-Grande TextArea" id="textareaInput2" width="100%" height="90px"></simple-textarea>


    </div>
    {/* Title cabezera */}
    <div className='box'>
    <title-header content="Hello, Web Component! Im a TITLEs" width="100%" height="50%"></title-header>
    <title-header content="Hello, Im even smaller" width="30%" height="80%"></title-header>

    </div>
    {/* Pie de pagina */}
    <div className='box'></div>
    
    
    
    <div className='box'></div>
    <div className='box'></div>
    <div className='box'></div>
    <div className='box'></div>
  </div>
    </>
  );
}

export default PlayGround;
