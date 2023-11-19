// ButtonSaveInfo.jsx
import React, { useContext, useState, useEffect } from 'react';
import SharedDataContext from '../../contexts/SharedDataContext';
import UserContext from '../../contexts/UserContext';
import { dataDictionary } from '../../webComponents/input';
import { dataDictionaryTextArea } from '../../webComponents/textArea';
import { getItem, setItem } from '../../utils/storage';
import { updateCase1, updateCase2, updateCase3 } from './ButtonVars'; // Correct import path
import logoSave from '../../assets/img/Icon/Save.svg';

function ButtonSaveInfo({ casefetch }) {
  const { isShareData, setIsShareData } = useContext(SharedDataContext);
  const { isUser, setIsUser } = useContext(UserContext);
  const [isSaving, setIsSaving] = useState(false);
  const [Exe2, setExe2] = useState(false);
  const CurrentProyectID = getItem('currentProyectID');
  const Current = getItem('currentProyect') || {};

  useEffect(() => {
    if (isUser.fetchCase && !isNaN(isUser.fetchCase)) {
      // console.log("🚀 ~ file: ButtonSaveInfo.jsx:38 ~ useEffect ~ !isNaN(isUser.fetchCase):", !isNaN(isUser.fetchCase,isUser.fetchCase));
      handleSend(isUser.fetchCase);
    }
  }, [isUser]);
  const handleSend = async (param) => {
    console.log("🚀 ~ file: ButtonSaveInfo.jsx:46 ~ handleSend ~ param:", param);
    try {
      let apiUrl = '';
      let requestOptions = {};
      switch (param) {
        case 1:
          ({ apiUrl, requestOptions } = updateCase1()); // Call the function and destructure the result
          break;
        case 2:
          ({ apiUrl, requestOptions } = updateCase2()); // Call the function and destructure the result
          break;
        case 3:
          ({ apiUrl, requestOptions } = updateCase3()); // Call the function and destructure the result
          break;
        default:
          alert.error(error.message);
          break;
      }

      const response = await fetch(apiUrl, requestOptions);

      if (response.ok) {
        const data = await response.json();
        console.log('Response Data:', data);
      } else {
        const errorMessage = await response.text(); // Get the error message from the response body
        console.error("🚀 ~ file: ButtonSaveInfo.jsx:81 ~ handleSend ~ Error:", errorMessage);
        // Display the error message to the user using a suitable method (e.g., show an alert, update UI, etc.)
        // You can replace the following line with the desired UI feedback mechanism
        alert.error(`Failed to save data: ${errorMessage}`);
      }

      // Reiniciar el estado de isSaving después de la ejecución del fetch
      
    } catch (error) {
      console.error('Error:', error);

    }
  };

  return (
    <>
      <button
        onClick={() => {
          handleSend(casefetch);
        }}
      >
        <img
          src={logoSave}
          className="h-[40px] w-[30px] lg:w-[40px] lg:h-[50px] md:h-[30px] md:mr-[10px] sm:h-[30px] xl:mr-[10px]"
          alt="Save"
        />
      </button>
    </>
  );
}

export default ButtonSaveInfo;
