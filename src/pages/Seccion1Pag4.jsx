import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/atoms/Header';
import VerticalText from '../components/atoms/VerticalText';
import ClaveDeAcceso from '../components/atoms/ClaveDeAcceso';
import Footer from '../components/atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import ButtonSaveInfo from '../components/atoms/ButtonSaveInfo';
import SharedDataContext from '../contexts/SharedDataContext';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Table from '../components/atoms/Table';

function Seccion1Pag4() {
  const { isShareData } = useContext(SharedDataContext);

  const ColumnsTable = [
    { id: "id", title: "No°" },
    { id: "academic_degree", title: "Grado" },
    { id: "full_name", title: "Nombre completo" },
    { id: "affiliation_center_id", title: "Adscripción" },
    { id: "specialization_area", title: "Área de especialización" },
    { id: "tasks", title: "Tareas específicas" },
    { id: "participation_level", title: "Nivel de participación" },
  ];

  const HandlerClickFetch = () => {
    alert("Datos guardados: " + JSON.stringify(rowData));
    console.log("JSON.stringify(rowData):", JSON.stringify(rowData));
  };
  return (
    <>
      <Header />
      <div className="flex font-sans">
        <div className="flex flex hidden lg:block lg:w-1/6 justify-center mt-20 mb-20">
          <VerticalText />
        </div>

        <div className='flex flex-col w-full lg:w-5/6 bg-white lg:rounded-tl-lg'>
          <div>
            <ClaveDeAcceso />
          </div>

          <div className="flex items-center place-content-around text-center w-full mt-5 lg:mt-20">
            <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>
            <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
              <p className='text-xl lg:text-3xl'>1.7 Tipo de investigación</p>
            </div>
            <ButtonSaveInfo />
          </div>

          <div className='flex flex-col w-full items-center'>
            <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.perspective || ''} height="30px" placeholder="Elija un elemento" id="perspective"></simple-input> {/*checkboxito*/}

            <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.scope || ''} height="30px" placeholder="Elija un elemento" id="scope"></simple-input> {/*checkboxito*/}

            <simple-textarea class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={isShareData.textareaInput1 || ''} height="30px" type="text" placeholder="Alcance" id="textareaInput1"></simple-textarea>
          </div>

          <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
            <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>
            <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
              <p className='text-xl lg:text-3xl'>1.8 Grupo de trabajo</p>
            </div>
            <ButtonSaveInfo onClick={HandlerClickFetch} />
          </div>

          <div className='text-center'>
            <p className='font-bold text-xl text-gray-500'>No incluir a la Persona responsable técnica en el listado y anotar un máximo de 6 personas colaboradoras</p>
          </div>


          <div className="flex justify-center mt-3 mb-5">
            <div className='text-center w-5/6 mt-2'>
              <p className='font-bold text-xl text-gray-400'>Solo se considerará la participación de seis personas colaboradoras académicas por proyecto de investigación con financiamiento propio. Si anotan más, estos no serán mencionados en constancias de registro, conclusión o estatus. Esto no aplica para proyectos con financiamiento externo.</p>
            </div>
          </div>

          <Table columns={ColumnsTable} savedInfo={isShareData.work_team || ''} keyIsShareData={"work_team"} />

          <div className='flex place-content-around mt-10 mb-10 lg:mt-24'>
            <Link to="/seccion1Pag3">
              <button>
                <div className='grid'>
                  <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
                    <img src={arrowselector} alt="Anterior"></img>
                  </div>
                </div>
              </button>
            </Link>
            <Link to="/seccion1Pag5">
              <button>
                <div className='grid'>
                  <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
                    <p className='text-2xl lg:text-3xl'>Siguiente</p>
                  </div>
                </div>
              </button>
            </Link>
            <div className='flex'>
              <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>4 - 5</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Seccion1Pag4;