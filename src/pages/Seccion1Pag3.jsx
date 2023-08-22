import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import logoListo from "../assets/img/Icon/checkVerificado.svg";
import logoSave from "../assets/img/Icon/Save.svg";
import "../assets/css/botoncito.css";

function Seccion1Pag3() {
    const [isInfoComplete, setIsInfoComplete] = useState({
        seccion1: false,
        seccion2: false,
      });
    
      const requiredFields = {
        seccion1: ['name', 'status', 'research_group_name', 'group_instance', 'collaboration_networks', 'network_name', 'research_line'],
        seccion2: ['funding_type', 'funding_source_institution', 'program', 'program_link', 'year', 'evaluating_instance'],
      };
    
      const seccion1InitialState = {
        name: '',
        status: '',
        research_group_name: '',
        group_instance: '',
        collaboration_networks: '',
        network_name: '',
        research_line: '',
      };
    
      const seccion2InitialState = {
        funding_type: '',
        funding_source_institution: '',
        program: '',
        program_link: '',
        year: '',
        evaluating_instance: '',
      };
    
      const [inputValuesSeccion1, setInputValuesSeccion1] = useState(seccion1InitialState);
      const [inputValuesSeccion2, setInputValuesSeccion2] = useState(seccion2InitialState);
    
      const handleInputChangeSeccion1 = (id, value) => {
        setInputValuesSeccion1((prevValues) => ({
          ...prevValues,
          [id]: value,
        }));
      };
    
      const handleInputChangeSeccion2 = (id, value) => {
        setInputValuesSeccion2((prevValues) => ({
          ...prevValues,
          [id]: value,
        }));
      };
    
      const handleSave = (section) => {
        if (areFieldsComplete(section)) {
          setIsInfoComplete((prevInfo) => ({
            ...prevInfo,
            [section]: true,
          }));
        } else {
          setIsInfoComplete((prevInfo) => ({
            ...prevInfo,
            [section]: false,
          }));
          alert('Por favor, complete todos los campos antes de guardar.');
        }
      };
    
      const areFieldsComplete = (section) => {
        const inputValues = section === 'seccion1' ? inputValuesSeccion1 : inputValuesSeccion2;
        return requiredFields[section].every(
          (field) => inputValues[field].trim() !== ''
        );
      };
    
      useEffect(() => {
        const isSeccion1Complete = isInfoComplete.seccion1;
        const isSeccion2Complete = isInfoComplete.seccion2;
    
        const jsonData = {
          seccion1: isSeccion1Complete ? inputValuesSeccion1 : null,
          seccion2: isSeccion2Complete ? inputValuesSeccion2 : null,
        };
    
        console.log('JSON Data:', jsonData);
      }, [isInfoComplete, inputValuesSeccion1, inputValuesSeccion2]);
    
    
    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex hidden lg:block lg:w-1/6 justify-center mt-20 mb-20">
                    <VerticalText />
                </div>

                <div className='flex flex-col w-full lg:w-5/6 bg-white rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-5 lg:mt-20">
    <img src={isInfoComplete.seccion1 ? logoListo : logoSinNadita} className="h-10 lg:h-20" />
    <div className="bg-[#BCB785] w-full lg:w-5/6 text-white p-3 rounded-md">
        <p className="text-xl lg:text-3xl">1.5 Redes y grupos de investigación</p>
    </div>
    <button onClick={() => handleSave('seccion1')}>
                            <img src={logoSave} className="h-[40px] w-[30px] lg:w-[40px] lg:h-[50px] md:h-[30px] md:mr-[10px] sm:h-[30px] xl:mr-[10px]" alt="Save" />
                        </button>
</div>

<div className='flex flex-col w-full items-center'>
    <input
        className="input-style"
        type="text"
        placeholder="Nombre del Cuerpo Académico (CA)"
        id="name"
        value={inputValuesSeccion1.name}
        onChange={(e) => handleInputChangeSeccion1('name', e.target.value)}
    />
    <input
        className="input-style"
        type="text"
        placeholder="Estatus del (CA)"
        id="status"
        value={inputValuesSeccion1.status}
        onChange={(e) => handleInputChangeSeccion1('status', e.target.value)}
    />
    <input
        className="input-style"
        type="text"
        placeholder="Nombre del grupo colegiado de investigación"
        id="research_group_name"
        value={inputValuesSeccion1.research_group_name}
        onChange={(e) => handleInputChangeSeccion1('research_group_name', e.target.value)}
    />
    <input
        className="input-style"
        type="text"
        placeholder="Instancia donde está formalizado el grupo o CA (Ej. PRODEP, DGIP-UNACH...)"
        id="group_instance"
        value={inputValuesSeccion1.group_instance}
        onChange={(e) => handleInputChangeSeccion1('group_instance', e.target.value)}
    />
    <input
        className="input-style"
        type="text"
        placeholder="Redes de colaboración"
        id="collaboration_networks"
        value={inputValuesSeccion1.collaboration_networks}
        onChange={(e) => handleInputChangeSeccion1('collaboration_networks', e.target.value)}
    />
    <input
        className="input-style"
        type="text"
        placeholder="Indicar nombre de la red"
        id="network_name"
        value={inputValuesSeccion1.network_name}
        onChange={(e) => handleInputChangeSeccion1('network_name', e.target.value)}
    />
    <input
        className="input-style"
        type="text"
        placeholder="Línea de investigación a desarrollar en el proyecto"
        id="research_line"
        value={inputValuesSeccion1.research_line}
        onChange={(e) => handleInputChangeSeccion1('research_line', e.target.value)}
    />
</div>


<div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-10">
    <img src={isInfoComplete.seccion2 ? logoListo : logoSinNadita} className="h-10 lg:h-20" />
    <div className="bg-[#BCB785] w-full lg:w-5/6 text-white p-3 rounded-md">
        <p className="text-xl lg:text-3xl">1.6 Tipo de financiamiento</p>
    </div>
    <button onClick={() => handleSave('seccion2')}>
                            <img src={logoSave} className="h-[40px] w-[30px] lg:w-[40px] lg:h-[50px] md:h-[30px] md:mr-[10px] sm:h-[30px] xl:mr-[10px]" alt="Save" />
                        </button>
</div>

<div className='text-center'>
    <p className='font-bold text-base mt-3 lg:text-xl text-gray-500'>Escriba “No aplica”, donde corresponda</p>
</div>

<div className='flex flex-col w-full items-center'>
    <input
        className="input-style"
        type="text"
        placeholder="Tipo de financiamiento"
        id="funding_type"
        value={inputValuesSeccion2.funding_type}
        onChange={(e) => handleInputChangeSeccion2('funding_type', e.target.value)}
    />
    <input
        className="input-style"
        type="text"
        placeholder="Institución/fuente"
        id="funding_source_institution"
        value={inputValuesSeccion2.funding_source_institution}
        onChange={(e) => handleInputChangeSeccion2('funding_source_institution', e.target.value)}
    />
    <input
        className="input-style"
        type="text"
        placeholder="Convocatoria/programa"
        id="program"
        value={inputValuesSeccion2.program}
        onChange={(e) => handleInputChangeSeccion2('program', e.target.value)}
    />
    <input
        className="input-style"
        type="text"
        placeholder="Enlace de la convocatoria"
        id="program_link"
        value={inputValuesSeccion2.program_link}
        onChange={(e) => handleInputChangeSeccion2('program_link', e.target.value)}
    />
    <input
        className="input-style"
        type="text"
        placeholder="Año de la convocatoria"
        id="year"
        value={inputValuesSeccion2.year}
        onChange={(e) => handleInputChangeSeccion2('year', e.target.value)}
    />
    <input
        className="input-style"
        type="text"
        placeholder="Instancia dictaminadora"
        id="evaluating_instance"
        value={inputValuesSeccion2.evaluating_instance}
        onChange={(e) => handleInputChangeSeccion2('evaluating_instance', e.target.value)}
    />
</div>


                    <div className='flex place-content-around mt-10 mb-10 lg:mt-24'>
                        <Link to="/seccion1Pag2">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
                                        <img src={arrowselector}></img>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <Link to="/seccion1Pag4">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
                                        <p className='text-2xl lg:text-3xl'>Siguiente</p>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>3 - 5</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Seccion1Pag3;