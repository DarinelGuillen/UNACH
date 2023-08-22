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

function Seccion1() {
    const [isInfoComplete, setIsInfoComplete] = useState({
        seccion1: false,
        seccion2: false,
    });

    const requiredFields = {
        seccion1: ['tituloProyecto', 'fechaPropuesta', 'lugarRealizacion'],
        seccion2: ['vigenciaInicio', 'vigenciaConclusion', 'horasSemanal'],
    };

    const seccion1InitialState = {
        tituloProyecto: '',
        fechaPropuesta: '',
        lugarRealizacion: '',
    };

    const seccion2InitialState = {
        vigenciaInicio: '',
        vigenciaConclusion: '',
        horasSemanal: '',
    };

    const [seccion1Values, setSeccion1Values] = useState(seccion1InitialState);
    const [seccion2Values, setSeccion2Values] = useState(seccion2InitialState);

    const handleInputChange = (section, id, value) => {
        if (section === 'seccion1') {
            setSeccion1Values((prevValues) => ({
                ...prevValues,
                [id]: value,
            }));
        } else if (section === 'seccion2') {
            setSeccion2Values((prevValues) => ({
                ...prevValues,
                [id]: value,
            }));
        }
    };

    const handleSave = (section) => {
        const areFieldsComplete = requiredFields[section].every(
            (field) => (section === 'seccion1' ? seccion1Values[field] : seccion2Values[field]).trim() !== ''
        );

        if (areFieldsComplete) {
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

    useEffect(() => {
        const isSeccion1Complete = isInfoComplete.seccion1;
        const isSeccion2Complete = isInfoComplete.seccion2;

        const jsonData = {
            seccion1: isSeccion1Complete ? seccion1Values : null,
            seccion2: isSeccion2Complete ? seccion2Values : null,
        };

        console.log('JSON Data:', jsonData);
    }, [isInfoComplete, seccion1Values, seccion2Values]);

    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex hidden lg:block lg:w-1/6 lg:justify-center lg:mt-20 lg:mb-20">
                    <VerticalText />
                </div>

                <div className='flex flex-col w-full lg:w-5/6 bg-white rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>

                    <div className='text-center font-bold mt-5 mb-2 lg:mb-0'>
                        <p className='text-[#BCB785] text-4xl '>Sección 2: <br />Protocolo del proyecto</p>
                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-5 lg:mt-20">
                        <img src={isInfoComplete.seccion1 ? logoListo : logoSinNadita} className="h-10 lg:h-20" />
                        <div className="bg-[#BCB785] w-full lg:w-5/6 text-white p-3 rounded-md">
                            <p className="text-xl lg:text-3xl">1.1 Título del proyecto</p>
                        </div>
                        <button onClick={() => handleSave('seccion1')}><img src={logoSave} className="h-10 lg:h-20"></img></button>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-base lg:text-xl text-gray-500'>Rellene los siguientes campos según como se requiera</p>
                    </div>

                    <div className='flex flex-col w-full'>
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Título"
                            value={seccion1Values.tituloProyecto}
                            onChange={(e) => handleInputChange('seccion1', 'tituloProyecto', e.target.value)}
                        />
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Fecha de elaboración de propuesta"
                            value={seccion1Values.fechaPropuesta}
                            onChange={(e) => handleInputChange('seccion1', 'fechaPropuesta', e.target.value)}
                        />
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Lugar de realización"
                            value={seccion1Values.lugarRealizacion}
                            onChange={(e) => handleInputChange('seccion1', 'lugarRealizacion', e.target.value)}
                        />
                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={isInfoComplete.seccion2 ? logoListo : logoSinNadita} className='h-10 lg:h-20' />
                        <div className="bg-[#BCB785] w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>1.2 Periodo de ejecución del proyecto </p>
                        </div>
                        <button onClick={() => handleSave('seccion2')}><img src={logoSave} className='h-10 lg:h-20'></img></button>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>(proyectos con recursos de la persona investigadora, la vigencia es de un año)</p>
                    </div>

                    <div className='flex flex-col w-full'>
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Vigencia:Inicio"
                            value={seccion2Values.vigenciaInicio}
                            onChange={(e) => handleInputChange('seccion2', 'vigenciaInicio', e.target.value)}
                        />
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Vigencia:Conclusión"
                            value={seccion2Values.vigenciaConclusion}
                            onChange={(e) => handleInputChange('seccion2', 'vigenciaConclusion', e.target.value)}
                        />
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Horas dedicadas semanalmente al proyecto (HSM)"
                            value={seccion2Values.horasSemanal}
                            onChange={(e) => handleInputChange('seccion2', 'horasSemanal', e.target.value)}
                        />
                    </div>

                    <div className='flex place-content-around mt-10 mb-10 lg:mt-24'>
                        <Link to="/">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
                                        <img src={arrowselector}></img>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <button>
                            <div className='grid'>
                                <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
                                    <Link to="/seccion1Pag2"><p className='text-2xl lg:text-3xl'>Siguiente</p></Link>
                                </div>
                            </div>
                        </button>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>1 - 5</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Seccion1;