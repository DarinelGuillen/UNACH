import React, { useContext, useState } from 'react';
import SharedDataContext from '../contexts/SharedDataContext';
import logoSave from '../assets/img/Icon/Save.svg';
import { dataDictionary } from "../webComponents/input";
import { dataDictionaryTextArea } from "../webComponents/textArea";


function ButtonSaveInfo({ onSave, onSend }) {
  const { isShareData, setIsShareData } = useContext(SharedDataContext);
  const [isSaving, setIsSaving] = useState(false);

  const mergeDataIntoContext = (newData, existingData) => {
    return { ...existingData, ...newData };
  };

  const handleSaveLocally = () => {
    const mergedData = mergeDataIntoContext(
      { ...dataDictionary, ...dataDictionaryTextArea },
      isShareData
    );
    setIsShareData(mergedData);
    console.log("Datos locales guardados: ", mergedData);
  };

  const handleSend = async () => {
    setIsSaving(true);

    try {
      const response = await sendDataToAPI(isShareData);

      if (response.success) {
        console.log('Response Data:', response.message);
        setIsSaving(false);
        onSend();
      } else {
        console.error('Error:', response.message);
        setIsSaving(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setIsSaving(false);
    }
  };

  return (
    <div>
      <button onClick={handleSaveLocally}>
        <img
          src={logoSave}
          className="h-[40px] w-[30px] lg:w-[40px] lg:h-[50px] md:h-[30px] md:mr-[10px] sm:h-[30px] xl:mr-[10px]"
          alt="Save"
        />
      </button>
    </div>
  );
}

export default ButtonSaveInfo;