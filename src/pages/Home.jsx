import { useState } from 'react';
import '../assets/css/MyInput.css';
import '../assets/css/index.css';
import MyInput from '../webComponets/MyInput.jsx';
function Home() {
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
      <h1>This is an Example input</h1>
      <my-test></my-test>
      <my-input label="Password:" placeholder="Your password here" width="100%" value="" id="password"></my-input>
      <my-input label="Mail:" placeholder="Your Mail here" width="190%" value=""></my-input>

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
      
    </>
  );
}

export default Home;
