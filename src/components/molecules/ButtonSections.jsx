import React, { useContext, useState } from 'react';
import arrowselector from '../../assets/img/Icon/arrow.svg';
import UserContext from '../../contexts/UserContext';
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';

function ButtonSections({ caseValue }) {
  const { isUser, setIsUser } = useContext(UserContext);
  const [isSaving, setIsSaving] = useState(false);

  const handleSectionChange = (newPage) => {
    if (newPage >= 1 && newPage <= 15) {
      setIsUser((prevState) => ({ ...prevState, page: newPage, fetchCase: caseValue||null }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsSaving(true);
    }
  };

  return (
    <>
      <div className='flex place-content-around ml-2 mt-10 mb-10 lg:mt-24'>
        <button onClick={() => handleSectionChange(isUser.page - 1)}>
          <div className=''>
            <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
              <img src={arrowselector} alt='Arrow Selector' />
            </div>
          </div>
        </button>
        <button onClick={() => handleSectionChange(isUser.page + 1)}>
          <div className='flex'>
            <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
              <p className='text-2xl lg:text-3xl'>Siguiente</p>
            </div>
          </div>
        </button>
        <div className=''>
          <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>{isUser.page}-15</p>
        </div>
      </div>
    </>
  );
}

export default ButtonSections;
