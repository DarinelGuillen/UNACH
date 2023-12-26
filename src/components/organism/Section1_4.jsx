import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../../assets/img/Icon/checkSinNada.svg";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../../contexts/SharedDataContext';
import arrowselector from '../../assets/img/Icon/arrow.svg';
import Table from '../atoms/Table';
import ButtonSections from '../molecules/ButtonSections';
import { getItem, setItem } from '../../utils/storage';


function Section1_4() {
  const Current = getItem('currentProyect') || {};
    // const { Current } = useContext(SharedDataContext);

    const ColumnsTable = [
      { id: "degree", title: "Grado", hover:"Estas son la unicas opciones que puede agregar, Lic,Ing,Mtro, Mtra,Dra, Dr" },
      { id: "full_name", title: "Nombre completo", hover:"Nombre completo de participante de grupo de trabajo" },
      { id: "affiliation", title: "Adscripción" ,hover:"" },
      { id: "specialization_area", title: "Área de especialización" ,hover:null },
      { id: "specific_tasks", title: "Tareas específicas" ,hover:null},
      { id: "participation_level", title: "Nivel de participación" ,hover:"Estas son la unicas opciones que puede agregar, Esporádica u ocasional, Recurrente Permanente"},
      
    ];
  
    const HandlerClickFetch = () => {
      alert("Datos guardados: " + JSON.stringify(rowData));
      console.log("JSON.stringify(rowData):", JSON.stringify(rowData));
    };
    return (
      <>
        <Header />
        <div className="flex font-sans">
          <div className="flex hidden lg:block lg:w-1/6 justify-center bg-[#25313A]">
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
              <ButtonSaveInfo casefetch={2} />
            </div>
  
            <div className='flex flex-col w-full items-center'>
              {/*TODO CheckBOX */}
              <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={Current.rt_perspective || ''}
                height="40px"
                type="combo-box"
                options="Cualitativa,
              Cuantitativa,
              Mixta 
              "
                placeholder="Perspectiva" id="rt_perspective"></simple-input>

              {/*TODO CheckBOX */}
              <simple-input
                class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                value={Current.rt_scope || ''}
                height="40px"
                type="combo-box"
                options='Explorativa,  
                Descriptiva,
                Correlacional,
                Explicativa,
                Predictiva,
                Interpretativa,
                Comprensiva,
                Transformadora,
                OtraIndicar
                '
                placeholder="Alcance"
                id="rt_scope"
              >
              </simple-input>
                {/* Agrega un campo de entrada adicional para "Otra indicar" */}
                {Current.rt_scope === 'OtraIndicar' && (
                  <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                    value={Current.Otro_rt_scope || ''}
                    height="30px"
                    type="text"
                    placeholder="Escriba su Alcanse"
                    id="Otro_rt_scope"></simple-input>

                )}


              {/* <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={Current.rt_scope || ''}
                height="40px"
                type="combo-box"
                options="Explorativa,  
              Descriptiva,
              Correlacional,
              Explicativa,
              Predictiva,
              Interpretativa,
              Comprensiva,
              Transformadora,
              Otra indicar
              "
                placeholder="Alcance" id="rt_scope"></simple-input> */}

              <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" value={Current.rt_specify || ''} height="30px" type="text" placeholder="Especifique" id="rt_specify"></simple-input>
            </div>
  
            <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
              <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>
              <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                <p className='text-xl lg:text-3xl'>1.8 Grupo de trabajo</p>
              </div>
              <ButtonSaveInfo casefetch={2} onClick={HandlerClickFetch} />
            </div>
  
            <div className='text-center'>
              <p className='font-bold text-xl text-gray-500'>No incluir a la Persona responsable técnica en el listado y anotar un máximo de 6 personas colaboradoras</p>
            </div>
  
  
            <div className="flex justify-center mt-3 mb-5">
              <div className='text-center w-5/6 mt-2'>
                <p className='font-bold text-xl text-gray-400'>Solo se considerará la participación de seis personas colaboradoras académicas por proyecto de investigación con financiamiento propio. Si anotan más, estos no serán mencionados en constancias de registro, conclusión o estatus. Esto no aplica para proyectos con financiamiento externo.</p>
              </div>
            </div>
  
            <Table columns={ColumnsTable} savedInfo={Current.work_group || ''} keyCurrent={"work_group"} />
  
            <ButtonSections caseValue={2}/>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Section1_4;