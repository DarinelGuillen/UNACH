import { useContext,useEffect } from 'react';
import SharedDataContext from '../contexts/SharedDataContext';
import { dataDictionary } from '../webComponents/input';
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';

function PlayGround() {

  return (
    <>
      <div className="container">
        {/* Input */}
        <div className="box">
          <h1>First Componets</h1>
          <h1>Input simple look in console</h1>
          <ButtonSaveInfo/>
          <simple-input
            type="email"
            type1OR2="1"
            placeholder="Enter email"
            id="emailInput"
            width="80%"
          ></simple-input>
          <simple-input
            type="textArea"
            type1OR2="2"
            placeholder="Enter password"
            id="textArea"
            width="80%"
          ></simple-input>
          <simple-input type="number" placeholder="Enter Phone" id="PhoneInput" width="90%"></simple-input>
          <simple-input type="textArea" placeholder="Enter text" id="textareaInput" width="50%" height="auto"></simple-input>
          <simple-textarea type="text" placeholder="Web componet Input-mediano TextArea" id="textareaInput1" width="60%" height="90px"></simple-textarea>
          <simple-textarea type="textArea" placeholder="Web componet Input-Grande TextArea" id="textareaInput2" width="100%" height="90px"></simple-textarea>


        </div>
        {/* Title cabezera */}
        <div className='box'>
          <title-header content="Hello, Web Component! Im a TITLEs" width="100%" height="50%"></title-header>
          <title-header content="Hello, Im even smaller" width="30%" height="80%"></title-header>

        </div>
        {/* Pie de pagina */}
        <div className='box'></div>
        {/* Button section  */}
        <div className='box'>
          <h1>Custom Button Examples</h1>
          <custom-button
            width="150px"
            height="50px"
            text="Navigate"
            functionName="navigateToPage"
          ></custom-button>
          <custom-button
            width="120px"
            height="40px"
            text="Show Alert"
            functionName="showAlert"
          ></custom-button>
          <custom-button
            width="200px"
            height="60px"
            text="Custom Action"
            functionName="performCustomAction"
          ></custom-button>
        </div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </div>






    </>
  );
}

export default PlayGround;

function navigateToPage() {
  // Navigation logic
  console.log('Navigating to another page');
}

function showAlert() {
  // Alert logic
  alert('This is an alert');
}

function performCustomAction() {
  // Custom action logic
  console.log('Custom action performed');
}