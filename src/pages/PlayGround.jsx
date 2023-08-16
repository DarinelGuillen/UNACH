import { useState } from 'react';
import '../assets/css/MyInput.css';
import '../assets/css/PlayGround.css';
import MyInput from '../webComponents/MyInput.jsx';
import componentitoUnachLogo from '../assets/img/Icon/componenteUnachLogo.svg';
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

    </div>
    {/* Title cabezera */}
    <div className='box'>
    <title-header content="Hello, Web Component! Im a TITLEs" width="100%" height="50%"></title-header>
    <title-header content="Hello, Im even smaller" width="30%" height="80%"></title-header>

    </div>
    {/* Pie de pagina */}
    <div className='box'></div>
    <div className="box">
    <h1>This is an Example input</h1>
      <my-test></my-test>
      <my-input label="Password:" placeholder="Your password here" width="100%" value="" id="password"></my-input>
      <my-input label="Mail:" placeholder="Your Mail here" width="100%" value=""></my-input>
    </div>
    <div className="box">
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
    </div>
    {/* !Steps circles */}
    <div className='box'>
    <h1>TEST STEP CIRCLES </h1>
      <ul
  data-te-stepper-init
  className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
  <li
    data-te-stepper-step-ref
    data-te-stepper-step-active
    className="w-[4.5rem] flex-auto">
    <div
      data-te-stepper-head-ref
      className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
      <span
        data-te-stepper-head-icon-ref
        className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        1
      </span>
      <span
        data-te-stepper-head-text-ref
        className="font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        step1
      </span>
    </div>
    <div
      data-te-stepper-content-ref
      className="absolute w-full p-4 transition-all duration-500 ease-in-out">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </li>

  <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
    <div
      data-te-stepper-head-ref
      className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
      <span
        data-te-stepper-head-icon-ref
        className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        2
      </span>
      <span
        data-te-stepper-head-text-ref
        className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        step2
      </span>
    </div>
    <div
      data-te-stepper-content-ref
      className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </div>
  </li>

  <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">
    <div
      data-te-stepper-head-ref
      className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
      <span
        data-te-stepper-head-icon-ref
        className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
        3
      </span>
      <span
        data-te-stepper-head-text-ref
        className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
        step3
      </span>
    </div>
    <div
      data-te-stepper-content-ref
      className="absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out">
      Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
    </div>
    <div className='box'>
    
            <div className="w-11/12 lg:w-2/6 mx-auto">
                <div className="bg-gray-200 h-1 flex items-center justify-between">
                    <div className="w-1/3 bg-indigo-700 h-1 flex items-center">
                        <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-between bg-indigo-700 h-1 items-center relative">
                        <div className="absolute right-0 -mr-2">
                            <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12">
                                <svg className="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                                            <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                                <polygon id="Triangle" points="20 0 28 8 12 8" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-indigo-700 text-xs font-bold">Step 3: Analyzing</p>
                            </div>
                        </div>
                        <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                        </div>
                        <div className="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                            <div className="h-3 w-3 bg-indigo-700 rounded-full" />
                        </div>
                    </div>
                    <div className="w-1/3 flex justify-end">
                        <div className="bg-white h-6 w-6 rounded-full shadow" />
                    </div>
                </div>
            </div> 

    </div>
    
    <div className='box'></div>
    <div className='box'></div>
    <div className='box'></div>
    <div className='box'></div>
  </div>
      

      
      

      
    </>
  );
}

export default PlayGround;
