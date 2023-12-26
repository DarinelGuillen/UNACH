import { Link } from 'react-router-dom';
import arrowselector from '../../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../../assets/img/Icon/checkSinNada.svg";
import logoSave from "../../assets/img/Icon/Save.svg";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../../contexts/SharedDataContext';
import { useContext, useEffect, useState } from 'react';
import ButtonSections from '../molecules/ButtonSections';
import "../../assets/css/botoncito.css";
import {  useNavigate } from 'react-router-dom';
import { getItem, setItem } from '../../utils/storage';
import UserContext from '../../contexts/UserContext';

function Section2_0() {
    const Current = getItem('currentProyect') || {};
    const ProjectID = getItem('currentProyectID') || {};
    const { isUser, setIsUser } = useContext(UserContext);

    const navigate = useNavigate();
    const [linkDrive, setLinkDrive] = useState(Current.link_drive || '');

    const handleLinkDriveChange = (event) => {
      const newLinkDrive = event.target.value;
      console.log("🚀 ~ file: Section2_0.jsx:26 ~ handleLinkDriveChange ~ newLinkDrive:", newLinkDrive);
      setLinkDrive(newLinkDrive); // Update the local state
    };

    const handleSectionChange2_0 = async (newPage) => {
        // Asynchronously update the storage
        const updatedCurrent = { ...getItem('currentProyect'), link_drive: linkDrive };
        console.log("🚀 ~ file: Section2_0.jsx:33 ~ Section2_0 ~ updatedCurrent:", updatedCurrent);
        setItem('currentProyect', updatedCurrent);
      
        // Wait for the storage update to complete before proceeding
        await new Promise((resolve) => setTimeout(resolve, 0));
      
        // Asynchronously update the user state
        setIsUser((prevState) => ({ ...prevState, page: newPage, fetchCase: 1 }));
      
        // Wait for the setIsUser operation to complete before proceeding
        await new Promise((resolve) => setTimeout(resolve, 0));
      
        // Continue with the rest of the logic
        if (linkDrive === null || linkDrive === '') {
          //! Condition: Current.link_drive does not exist or is null/empty.
          console.log("🚀 ~ file: Section2_0.jsx:29 ~ handleSectionChange2_0 ~ Current.link_drive:   , newPage", linkDrive, ",", newPage);
          alert("link drive vacio, rellene protocolo de propuesta");
          const requestBody = {
              id_projects: ProjectID,
          };
  
          // Make the POST request
          fetch("http://127.0.0.1:8000/api/ProjectProtocol", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(requestBody),
          })
              .then(response => response.json())
              .then(data => {
                  // Handle the response data as needed
                  console.log("Response from server:", data);
              })
              .catch(error => {
                  // Handle errors
                  console.error("Error during POST request:", error);
              });
          window.scrollTo({ top: 0, behavior: 'smooth' });
          
        } else {
          //<> Condition: Current.link_drive exists and is not null/empty.
          //<> Execute logic when Current.link_drive is a non-empty string.
      
          alert(`link drive-- ${linkDrive}. Terminando proceso, recuerde dar enviar a la propuesta`);
          console.log("🚀 ~ file: Section2_0.jsx:38 ~ handleSectionChange2_0 ~ Current.link_drive:   , newPage", Current.link_drive, ",", newPage);
          navigate("/");
        }
      };
      
      


    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex hidden lg:block lg:w-1/6 lg:justify-center bg-[#25313A] ">
                    <VerticalText />
                </div>

                <div className='flex flex-col w-full lg:w-5/6 bg-white lg:rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>

                    <div className='flex flex-col text-center w-full  mt-3 mb-3'>
                        <p className='font-bold text-gray-700 text-4xl mt-9 lg:text-xl'>PROTOCOLO DEL PROYECTO <br /> </p>
                        <p className=' text-2xl text-gray-700 w-[90%] ml-[6%]'>Si el proyecto tiene financiamiento externo, para 
                        realizar su trámite de registro NO es necesario llenar esta sección 2, solo adjunte copia del protocolo 
                        aprobado por la instancia financiadora, la notificación de aprobación y copia del convenio o carta de asignación de curso 
                        que indique el monto de financiamiento y la vigencia. </p>
                    </div>

                    <div className='text-center font-bold mt-5 mb-2 lg:mb-0'>
                        <p className='text-[#BCB785] text-4xl '>Sección 2: <br />Protocolo del proyecto</p>
                    </div>
                    <div className='text-center font-bold mt-5 mb-2 lg:mb-0'>
                        <p className='text-gray-900 text-4xl '>TITULO:</p>
                        <p className='text-blue-500 text-4xl '>{Current.title_project}</p>
                    </div>
                    

                    <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-[35px]">
                        <div className='h-[40px] ml-2 lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[50px] xl:ml-2 lg:ml-4'></div>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>Link the drive o dropbox compartido</p>
                        </div>

                        <ButtonSaveInfo casefetch={1} />
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>Si usted tiene un  financiamiento externo, asegurece de subir la carpeta en donde cuente con los documentos
                            donde adjunte copia del protocolo aprobado
                        </p>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <input
                            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300"
                            type="text"
                            placeholder="link_drive"
                            id="link_drive"
                            // value={Current.link_drive || ''}
                            value={linkDrive}
                            onChange={handleLinkDriveChange}
                        />
                        {/* <simple-input
                            class="w-[80%] mr-[2%] lg:w-[80%] lg:mr-[2%] xl:w-[81%] md:w-[85%] md:mr-[3%] sm:ml-[1%] sm:w-[84%]"
                            height="30px"
                            type="text"
                            placeholder="link_drive"
                            id="link_drive"
                            value={Current.link_drive
                                ||
                                ''}
                            onChange={handleLinkDriveChange}
                            onClick={() => console.log("Input Clicked")}
                        ></simple-input> */}
                    </div>
                    <div className='text-center'>
                        <p className='font-bold text-red-500 text-xl lg:text-xl'>Si a adguntado el link de donde se encuentra su documeto para el protocolo
                            guarde cambios para que no tenga que rellenar las casillas de protocolo del proyecto
                        </p>
                        <p className='font-bold text-blue-500 text-xl lg:text-xl'>
                            Caso contrario dar click Siguiente
                        </p>
                    </div>
                    <>
                        <div className='flex place-content-around ml-2 mt-10 mb-10 lg:mt-24'>
                            <button onClick={() => handleSectionChange2_0(isUser.page - 1, 1)}>
                                <div className=''>
                                    <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
                                        <img src={arrowselector} alt='Arrow Selector' />
                                    </div>
                                </div>
                            </button>
                            <button onClick={() => handleSectionChange2_0(isUser.page + 1, 1)}>
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

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Section2_0;