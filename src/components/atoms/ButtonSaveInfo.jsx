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

  const mergeDataIntoContext = (newData, existingData) => {
    return { ...existingData, ...newData };
  };

  const handleSaveLocally = () => {
    console.log("🚀 ~ file: ButtonSaveInfo.jsx:29 ~ handleSaveLocally ~ handleSaveLocally:")
    const mergedData = mergeDataIntoContext(
      { ...dataDictionary, ...dataDictionaryTextArea },
      isShareData
    );
    setIsShareData(mergedData);
  };

  // useEffect(() => {
  // //   console.log("🚀 ~ file: ButtonSaveInfo.jsx:30 ~ useEffect ~ useEffect:", isUser.fetchCase);
  //   if (isUser.fetchCase && !isNaN(isUser.fetchCase)) {
  //     handleSend(isUser.fetchCase);
  //   }
  // }, [isUser.fetchCase, Exe2]);

  useEffect(() => {
    if (isUser.fetchCase && !isNaN(isUser.fetchCase)) {
      // console.log("🚀 ~ file: ButtonSaveInfo.jsx:38 ~ useEffect ~ !isNaN(isUser.fetchCase):", !isNaN(isUser.fetchCase,isUser.fetchCase));
      handleSaveLocally();
      setExe2(true);
      setIsSaving(true)
    }
  }, [isUser]);

  useEffect(() => {
    if (isSaving) {
      // console.log("🚀 ~ file: ButtonSaveInfo.jsx:45 ~ useEffect ~ isSaving:", isSaving);
      handleSend(casefetch||isUser.fetchCase);
    }
  }, [isSaving, Exe2]);

  const handleSend = async (param) => {
    // console.log("🚀 ~ file: ButtonSaveInfo.jsx:46 ~ handleSend ~ param:", param);
    try {
      let apiUrl = '';
      let requestOptions = {};
      switch (param) {
        case 1:
          ({ apiUrl, requestOptions } = updateCase1(CurrentProyectID, isShareData)); // Call the function and destructure the result
          break;
        case 2:
          ({ apiUrl, requestOptions } = updateCase2(CurrentProyectID, isShareData)); // Call the function and destructure the result
          break;
        case 3:
          ({ apiUrl, requestOptions } = updateCase3(CurrentProyectID, isShareData)); // Call the function and destructure the result
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
      setIsSaving(false);
      setExe2(false)
    } catch (error) {
      console.error('Error:', error);
      setIsSaving(false);
      setExe2(false)

    }
  };

  return (
    <>
      <button
        onClick={() => {
          handleSaveLocally();
          setIsSaving(true);
          setExe2(true)
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
