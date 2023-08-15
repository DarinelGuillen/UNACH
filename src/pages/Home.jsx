import { useState } from 'react';
import MyInput from '../webComponets/MyInput.jsx';
import '../assets/css/MyInput.css';
import '../assets/css/index.css';

function Home() {
  const [inputValues, setInputValues] = useState({
    password: '',
    email: '',
    ExtraElementUser: '', // Add state for ExtraElementUser
    // Add more properties for other inputs
  });

  const handleInputChange = (id, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    console.log("🚀 ~ file: Home.jsx:20 ~ handleInputChange ~ inputValues:", inputValues)
  };

  return (
    <>
      <h1>This is an Example input</h1>
      <MyInput
        label="Password:"
        placeholder="Your password here"
        width="100%"
        value={inputValues.password}
        onChange={(value) => handleInputChange('password', value)}
        id="password"
      />
      <MyInput
        label="Mail:"
        placeholder="Mail"
        width="50%"
        value={inputValues.email}
        onChange={(value) => handleInputChange('email', value)}
        id="email"
      />
      <MyInput
        label="ExtraElementUser:"
        placeholder="ExtraElementUser"
        width="80%"
        value={inputValues.ExtraElementUser}
        onChange={(value) => handleInputChange('ExtraElementUser', value)}
        id="ExtraElementUser"
      />
      {/* Add more MyInput components for other inputs */}
    </>
  );
}

export default Home;
