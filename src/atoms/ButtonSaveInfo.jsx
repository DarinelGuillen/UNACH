import React, { useContext, useState } from "react";
import SharedDataContext from "../contexts/SharedDataContext";
import { dataDictionary } from "../webComponents/input";
import { dataDictionaryTextArea } from "../webComponents/textArea";
import logoSave from "../assets/img/Icon/Save.svg";

function ButtonSaveInfo({ onSend }) {
  const { isShareData, setIsShareData } = useContext(SharedDataContext);
  const [isSaving, setIsSaving] = useState(false);

  const mergeDataIntoContext = (newData, existingData) => {
    return { ...existingData, ...newData };
  };

  const HandlerClickSetData = (e) => {
    e.preventDefault();
    const mergedData = mergeDataIntoContext(
      { ...dataDictionary, ...dataDictionaryTextArea },
      isShareData
    );
    setIsShareData(mergedData);
    console.log("isShareData:", isShareData);
  };

  const handleSave = async () => {
    setIsSaving(true);
    const data = {
      title: isShareData.title || '',
      proposal_date: isShareData.proposal_date || '',
      location: isShareData.location || ''
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Data:", data);
      setIsSaving(false);
      onSend();
    } catch (error) {
      console.error("Error:", error);
      setIsSaving(false);
    }
  };

  return (
    <>
      <div>
        <button onClick={HandlerClickSetData}>
          <img
            src={logoSave}
            className="h-[40px] w-[30px] lg:w-[40px] lg:h-[50px] md:h-[30px] md:mr-[10px] sm:h-[30px] xl:mr-[10px]"
            alt="Save"
          />
        </button>
      </div>
    </>
  );
}

export default ButtonSaveInfo;
