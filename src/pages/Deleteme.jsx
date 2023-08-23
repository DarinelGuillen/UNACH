

import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SharedDataContext from "../contexts/SharedDataContext";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';

function Seccion1Pag1() {
  const { isShareData, setIsShareData } = useContext(SharedDataContext);
  return (
    <>
      {/* Resto del código aquí */}
      <div className='flex flex-col w-full items-center'>
        {/* Ejemplo de cómo mostrar los campos del formulario */}
        <simple-input
          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
          height="30px"
          placeholder="Nombre completo"
          id="full_name"
          value={isShareData.full_name || ''}
        ></simple-input>
        <simple-input
          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
          height="30px"
          placeholder="Correo electrónico"
          id="email"
          value={isShareData.email || ''}
        ></simple-input>
        <simple-input
          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
          height="30px"
          placeholder="Grado"
          id="academic_degree"
          value={isShareData.academic_degree || ''}
        ></simple-input>
        {/* Repite esto para los demás campos */}
        <ButtonSaveInfo />
      </div>
      {/* Resto del código aquí */}
    </>
  );
}

export default Seccion1Pag1;
